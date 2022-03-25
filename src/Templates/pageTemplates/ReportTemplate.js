import React from 'react';
import {REPORT_PATH} from "../../pages/pageConstants/PageRoutes";
import {REPORT_PAGE} from "../../pages/pageConstants/PageTypes";
import { STRING } from "../../components/Modal/InputTypes";

const ReportTemplate = {
	text: "Xisobot",
	path: REPORT_PATH,
	icon: "VectorIcon",
	type: REPORT_PAGE,
	isOpenModal: true,
	form: [
		{
		  grid: "1fr",
		  inputs: [
			{
			  name: "Xisobotlar",
			  type: STRING,
			},
		  ],
		},
	  ],
};

export default ReportTemplate;