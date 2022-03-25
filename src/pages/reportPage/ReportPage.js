import React from 'react';
import {useDispatch} from "react-redux"
import GlobalModal from '../../components/Modal/GlobalModal';



const ReportPage = () => {
	const dispatch = useDispatch()
	return (
		<div>
			Report Page
			<h1 >dispatch incerment</h1>
			<GlobalModal/>
		</div>
	);
};

export default ReportPage;