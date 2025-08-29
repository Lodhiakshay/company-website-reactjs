import { FileText, AlertCircle } from 'lucide-react';
import { FileUploadCard } from './FileUploadCard';
import { ApplicationData } from './types';

interface DocumentsStepProps {
  data: ApplicationData['documents'];
  onFileUpload: (file: File, type: 'resume' | 'coverLetter' | 'portfolio') => void;
  onFileRemove: (type: 'resume' | 'coverLetter' | 'portfolio') => void;
}

export function DocumentsStep({ data, onFileUpload, onFileRemove }: DocumentsStepProps) {
  return (
    <div className="space-y-6 max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
          <FileText className="w-5 h-5 text-green-600 dark:text-green-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Documents</h3>
          <p className="text-sm text-muted-foreground">Upload your resume and supporting documents</p>
        </div>
      </div>

      <div className="space-y-4">
        <FileUploadCard
          type="resume"
          label="Resume/CV *"
          description="Upload your latest resume (PDF, DOC, DOCX - Max 5MB)"
          file={data.resume}
          onFileUpload={onFileUpload}
          onFileRemove={onFileRemove}
        />
        
        <FileUploadCard
          type="coverLetter"
          label="Cover Letter"
          description="Optional cover letter (PDF, DOC, DOCX - Max 5MB)"
          file={data.coverLetter}
          onFileUpload={onFileUpload}
          onFileRemove={onFileRemove}
        />
        
        <FileUploadCard
          type="portfolio"
          label="Portfolio"
          description="Additional portfolio or work samples (PDF - Max 5MB)"
          file={data.portfolio}
          onFileUpload={onFileUpload}
          onFileRemove={onFileRemove}
        />
      </div>

      <div className="bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
              Document Guidelines
            </p>
            <ul className="text-xs text-blue-700 dark:text-blue-300 mt-1 space-y-1">
              <li>• Accepted formats: PDF, DOC, DOCX</li>
              <li>• Maximum file size: 5MB per document</li>
              <li>• Resume is required, other documents are optional</li>
              <li>• Ensure your documents are virus-free and readable</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}