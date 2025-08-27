import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Upload, CheckCircle, X } from 'lucide-react';

interface FileUploadCardProps {
  type: 'resume' | 'coverLetter' | 'portfolio';
  label: string;
  description: string;
  file?: File;
  onFileUpload: (file: File, type: 'resume' | 'coverLetter' | 'portfolio') => void;
  onFileRemove: (type: 'resume' | 'coverLetter' | 'portfolio') => void;
}

export function FileUploadCard({ 
  type, 
  label, 
  description, 
  file, 
  onFileUpload, 
  onFileRemove 
}: FileUploadCardProps) {
  return (
    <Card className="border-2 border-dashed border-border hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
      <CardContent className="p-6">
        {file ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="font-medium">{file.name}</p>
                <p className="text-sm text-muted-foreground">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onFileRemove(type)}
              className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/50"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        ) : (
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Upload className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-medium mb-2">{label}</h3>
            <p className="text-sm text-muted-foreground mb-4">{description}</p>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                const selectedFile = e.target.files?.[0];
                if (selectedFile) onFileUpload(selectedFile, type);
              }}
              className="hidden"
              id={`file-${type}`}
            />
            <Label htmlFor={`file-${type}`}>
              <Button variant="outline" className="cursor-pointer" asChild>
                <span>
                  <Upload className="w-4 h-4 mr-2" />
                  Choose File
                </span>
              </Button>
            </Label>
          </div>
        )}
      </CardContent>
    </Card>
  );
}