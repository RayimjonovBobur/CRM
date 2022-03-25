import { NewProgrammsTemplate } from "../programmsTemplates/NewProgrammsTemplate";
import { LearningProgrammesTemplate } from "../programmsTemplates/LearningProgrammesTemplate";
import { ProcessProgrammesTemplate } from "../programmsTemplates/ProcessProgrammesTemplate";
import { RejactProgrammesTemplate } from "../programmsTemplates/RejactProgrammesTemplate";
import { SubmittedProgrammesTemplate } from "../programmsTemplates/SubmittedProgrammesTemplate";

const ProgrammsTemplate = {
  ...NewProgrammsTemplate,
  text: "Dasturlar",
  icon: "VectorIcon",
  tabs: [
    NewProgrammsTemplate,
    ProcessProgrammesTemplate,
    LearningProgrammesTemplate,
    SubmittedProgrammesTemplate,
    RejactProgrammesTemplate,
  ],
  childText: NewProgrammsTemplate.text,
};

export default ProgrammsTemplate;
