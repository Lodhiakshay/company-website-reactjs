import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { FileText } from 'lucide-react';
import { ApplicationData } from './types';

interface QuestionsStepProps {
  questions: ApplicationData['questions'];
  preferences: ApplicationData['preferences'];
  onQuestionsChange: (data: ApplicationData['questions']) => void;
  onPreferencesChange: (data: ApplicationData['preferences']) => void;
}

export function QuestionsStep({ 
  questions, 
  preferences, 
  onQuestionsChange, 
  onPreferencesChange 
}: QuestionsStepProps) {
  const updateQuestion = (field: keyof ApplicationData['questions'], value: string) => {
    onQuestionsChange({ ...questions, [field]: value });
  };

  const updatePreference = (field: keyof ApplicationData['preferences'], value: boolean) => {
    onPreferencesChange({ ...preferences, [field]: value });
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center">
          <FileText className="w-5 h-5 text-orange-600 dark:text-orange-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Questions & Preferences</h3>
          <p className="text-sm text-muted-foreground">Help us understand your motivation and preferences</p>
        </div>
      </div>

      <div>
        <Label htmlFor="whyInterested">Why are you interested in this position? *</Label>
        <Textarea
          id="whyInterested"
          value={questions.whyInterested}
          onChange={(e) => updateQuestion('whyInterested', e.target.value)}
          placeholder="Tell us what attracts you to this role and how it aligns with your career goals..."
          className="mt-2 min-h-[100px] resize-y"
        />
      </div>

      <div>
        <Label htmlFor="whyCompany">Why do you want to work at TechFlow? *</Label>
        <Textarea
          id="whyCompany"
          value={questions.whyCompany}
          onChange={(e) => updateQuestion('whyCompany', e.target.value)}
          placeholder="What about our company culture, mission, or values resonates with you..."
          className="mt-2 min-h-[100px] resize-y"
        />
      </div>

      <div>
        <Label htmlFor="relevantExperience">Describe your relevant experience</Label>
        <Textarea
          id="relevantExperience"
          value={questions.experience}
          onChange={(e) => updateQuestion('experience', e.target.value)}
          placeholder="Share specific examples of your work that demonstrate your qualifications for this role..."
          className="mt-2 min-h-[100px] resize-y"
        />
      </div>

      <div className="space-y-4">
        <h4 className="font-medium">Work Preferences</h4>
        
        <div className="flex items-center space-x-2">
          <Checkbox
            id="remote"
            checked={preferences.remote}
            onCheckedChange={(checked) => updatePreference('remote', !!checked)}
          />
          <Label htmlFor="remote" className="text-sm">
            I am interested in remote work opportunities
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="relocation"
            checked={preferences.relocation}
            onCheckedChange={(checked) => updatePreference('relocation', !!checked)}
          />
          <Label htmlFor="relocation" className="text-sm">
            I am willing to relocate for this position
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="notifications"
            checked={preferences.notifications}
            onCheckedChange={(checked) => updatePreference('notifications', !!checked)}
          />
          <Label htmlFor="notifications" className="text-sm">
            I would like to receive updates about my application and similar job opportunities
          </Label>
        </div>
      </div>
    </div>
  );
}