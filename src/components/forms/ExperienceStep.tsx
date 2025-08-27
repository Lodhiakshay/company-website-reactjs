import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Briefcase } from 'lucide-react';
import { ApplicationData, EXPERIENCE_OPTIONS, AVAILABILITY_OPTIONS } from './types';

interface ExperienceStepProps {
  data: ApplicationData['experience'];
  onChange: (data: ApplicationData['experience']) => void;
}

export function ExperienceStep({ data, onChange }: ExperienceStepProps) {
  const updateField = (field: keyof ApplicationData['experience'], value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
          <Briefcase className="w-5 h-5 text-purple-600 dark:text-purple-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Professional Experience</h3>
          <p className="text-sm text-muted-foreground">Tell us about your work experience</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="currentRole">Current Role *</Label>
          <Input
            id="currentRole"
            value={data.currentRole}
            onChange={(e) => updateField('currentRole', e.target.value)}
            placeholder="Senior Software Engineer"
          />
        </div>
        <div>
          <Label htmlFor="company">Current Company</Label>
          <Input
            id="company"
            value={data.company}
            onChange={(e) => updateField('company', e.target.value)}
            placeholder="TechCorp Inc."
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="experience">Years of Experience *</Label>
          <Select value={data.experience} onValueChange={(value) => updateField('experience', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select experience level" />
            </SelectTrigger>
            <SelectContent>
              {EXPERIENCE_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="salary">Expected Salary</Label>
          <Input
            id="salary"
            value={data.salary}
            onChange={(e) => updateField('salary', e.target.value)}
            placeholder="$80,000 - $120,000"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="availability">Availability *</Label>
        <Select value={data.availability} onValueChange={(value) => updateField('availability', value)}>
          <SelectTrigger>
            <SelectValue placeholder="When can you start?" />
          </SelectTrigger>
          <SelectContent>
            {AVAILABILITY_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}