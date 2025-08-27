import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { CheckCircle, Loader2, Send } from 'lucide-react';
import { useData } from '../contexts/DataContext';
import { toast } from 'sonner@2.0.3';
import { ApplicationData, INITIAL_APPLICATION_DATA } from './forms/types';
import { PersonalInfoStep } from './forms/PersonalInfoStep';
import { ExperienceStep } from './forms/ExperienceStep';
import { DocumentsStep } from './forms/DocumentsStep';
import { QuestionsStep } from './forms/QuestionsStep';

interface JobApplicationFormProps {
  jobId: string;
  jobTitle: string;
  children: React.ReactNode;
}

export function JobApplicationForm({ jobId, jobTitle, children }: JobApplicationFormProps) {
  const { submitJobApplication } = useData();
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const totalSteps = 4;

  const [applicationData, setApplicationData] = useState<ApplicationData>(INITIAL_APPLICATION_DATA);

  const handleFileUpload = (file: File, type: 'resume' | 'coverLetter' | 'portfolio') => {
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB');
      return;
    }
    
    setApplicationData(prev => ({
      ...prev,
      documents: { ...prev.documents, [type]: file }
    }));
    
    toast.success(`${type} uploaded successfully`);
  };

  const removeFile = (type: 'resume' | 'coverLetter' | 'portfolio') => {
    setApplicationData(prev => ({
      ...prev,
      documents: { ...prev.documents, [type]: undefined }
    }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(
          applicationData.personalInfo.firstName &&
          applicationData.personalInfo.lastName &&
          applicationData.personalInfo.email &&
          applicationData.personalInfo.phone &&
          applicationData.personalInfo.location
        );
      case 2:
        return !!(
          applicationData.experience.currentRole &&
          applicationData.experience.experience &&
          applicationData.experience.availability
        );
      case 3:
        return !!applicationData.documents.resume;
      case 4:
        return !!(
          applicationData.questions.whyInterested &&
          applicationData.questions.whyCompany
        );
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    } else {
      toast.error('Please fill in all required fields');
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      await submitJobApplication(jobId, applicationData);
      setSubmitted(true);
      toast.success('Application submitted successfully!');
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setSubmitted(false);
    setApplicationData(INITIAL_APPLICATION_DATA);
  };

  if (submitted) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="max-w-md">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Application Submitted!</h3>
            <p className="text-muted-foreground mb-6">
              Thank you for your interest in the {jobTitle} position. We'll review your application and get back to you within 5-7 business days.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => { resetForm(); setOpen(false); }}>
                Apply for Another Position
              </Button>
              <Button onClick={() => setOpen(false)}>Close</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Apply for {jobTitle}</DialogTitle>
          <div className="flex items-center gap-4 mt-4">
            <Progress value={(currentStep / totalSteps) * 100} className="flex-1" />
            <span className="text-sm text-muted-foreground">Step {currentStep} of {totalSteps}</span>
          </div>
        </DialogHeader>

        <div className="py-6">
          {currentStep === 1 && (
            <PersonalInfoStep
              data={applicationData.personalInfo}
              onChange={(data) => setApplicationData(prev => ({ ...prev, personalInfo: data }))}
            />
          )}

          {currentStep === 2 && (
            <ExperienceStep
              data={applicationData.experience}
              onChange={(data) => setApplicationData(prev => ({ ...prev, experience: data }))}
            />
          )}

          {currentStep === 3 && (
            <DocumentsStep
              data={applicationData.documents}
              onFileUpload={handleFileUpload}
              onFileRemove={removeFile}
            />
          )}

          {currentStep === 4 && (
            <QuestionsStep
              questions={applicationData.questions}
              preferences={applicationData.preferences}
              onQuestionsChange={(data) => setApplicationData(prev => ({ ...prev, questions: data }))}
              onPreferencesChange={(data) => setApplicationData(prev => ({ ...prev, preferences: data }))}
            />
          )}
        </div>

        <div className="flex justify-between pt-6 border-t">
          <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
            Previous
          </Button>
          
          {currentStep === totalSteps ? (
            <Button onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Submit Application
                </>
              )}
            </Button>
          ) : (
            <Button onClick={nextStep}>
              Next
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}