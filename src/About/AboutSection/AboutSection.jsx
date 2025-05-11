import AboutCard from './AboutCard';
import {
  trainingData,
  affiliationsData,
  licensesData,
  educationData,
  certificationsData,
} from '../../utils/Links';

export default function AboutSection() {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:flex-wrap justify-center gap-6 py-10 px-4 md:px-10">
     
      <AboutCard
        title="Professional Training"
        items={trainingData}
        className="w-full sm:w-[480px] md:w-[620px] lg:w-[620px] min-h-[874px]"
      />

      <div className="flex flex-col gap-6 w-full md:w-auto">
        
        <AboutCard
          title="Professional Affiliations"
          items={affiliationsData}
          className="w-full sm:w-[480px] md:w-[620px] lg:w-[620px] min-h-[379px]"
        />

       
        <AboutCard
          title="Medical Licenses"
          items={licensesData}
          className="w-full sm:w-[480px] md:w-[620px] lg:w-[620px] min-h-[253px]"
        />

       
        <AboutCard
          title="Education"
          items={educationData}
          className="w-full sm:w-[480px] md:w-[620px] lg:w-[620px] min-h-[685px]"
        />
      </div>

      
      <AboutCard
        title="Board Certifications"
        items={certificationsData}
        className="w-full sm:w-[480px] md:w-[620px] lg:w-[620px] min-h-[637px]"
      />
    </div>
  );
}
