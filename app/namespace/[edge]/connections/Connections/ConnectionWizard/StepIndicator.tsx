interface Step {
  number: number;
  title: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export default function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className="flex flex-col items-center">
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
            <span className="text-sm mt-1">{step.title}</span>
          </div>
          {index < steps.length - 1 && (
            <div className={`
              w-24 h-0.5 mx-2
              ${currentStep > step.number ? 'bg-green-500' : 'bg-gray-200'}
            `} />
          )}
        </div>
      ))}
    </div>
  );
}