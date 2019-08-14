import styled from 'styled-components';
import { ReactComponent as ViewMoreIcon } from '../../assets/img/logo/next.svg';

const CollectionPreviewContainer = styled.div`
    display: flex;
	flex-direction: column;
	margin-bottom: 30px;
`;

const TitleContainer = styled.h1`
    font-size: 28px;
	margin-bottom: 25px;
`;

const PreviewContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ViewMoreButton = styled(ViewMoreIcon)`
    display: flex;
	align-self: center;
	cursor: pointer;
	height: 20px;
	width: 20px;
`;

export {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer,
    ViewMoreButton
}