import Link from 'next/link';

interface Step {
  number: number;
  title: string;
  component?: React.ComponentType<any>;
}

interface ConnectionWizardProps {
  title: string;
  currentStep: number;
  steps: Step[];
  onStepChange: (step: number) => void;
  edgeName: string;
}

export default function ConnectionWizard({ 
  title, 
  currentStep, 
  steps, 
  onStepChange,
  edgeName 
}: ConnectionWizardProps) {
  const CurrentStepComponent = steps[currentStep - 1]?.component;

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-8">
        <Link
          href={`/${edgeName}/connections/add`}
          className="text-blue-600 hover:text-blue-800"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>

      {/* Top Steps Navigation */}
      <div className="mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex justify-between items-center relative">
            {/* Connecting Lines */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10" />
            
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center relative z-10">
                <button
                  onClick={() => onStepChange(step.number)}
                  disabled={currentStep < step.number}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md bg-white ${
                    currentStep === step.number
                      ? 'text-blue-600'
                      : currentStep > step.number
                      ? 'text-gray-600 hover:bg-gray-50'
                      : 'text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm
                    ${currentStep === step.number 
                      ? 'bg-blue-600 text-white' 
                      : currentStep > step.number 
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }
                  `}>
                    {step.number}
                  </div>
                  <span className="font-medium">{step.title}</span>
                </button>

                {index < steps.length - 1 && (
                  <div className={`h-0.5 w-24 mx-4 ${
                    currentStep > step.number + 1
                      ? 'bg-green-500'
                      : currentStep > step.number
                      ? 'bg-blue-600'
                      : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        {CurrentStepComponent && <CurrentStepComponent />}
        
        <div className="flex justify-between mt-8 pt-4 border-t">
          <button
            onClick={() => onStepChange(currentStep - 1)}
            disabled={currentStep === 1}
            className="px-4 py-2 text-blue-600 hover:text-blue-800 disabled:text-gray-400"
          >
            Back
          </button>
          <button
            onClick={() => onStepChange(currentStep + 1)}
            disabled={currentStep === steps.length}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
          >
            {currentStep === steps.length ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}