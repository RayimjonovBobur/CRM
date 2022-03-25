import { JARAYONDAGI } from "../../pages/pageConstants/PageRoutes";
import { PROGRAMMERS_CHILD_PAGES } from "../../pages/pageConstants/PageTypes";
import { NewProgrammsTemplate } from "./NewProgrammsTemplate";
import {ProgrammsTemplateApi} from "../../constant/apiLine/apiLine";
export const ProcessProgrammesTemplate = {
  ...NewProgrammsTemplate,
  text: "Jarayondagi",
  path: JARAYONDAGI,
  key: "2",
  type: PROGRAMMERS_CHILD_PAGES,
  mainUrl: ProgrammsTemplateApi,
};
