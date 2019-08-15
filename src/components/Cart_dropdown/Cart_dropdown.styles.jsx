import styled from 'styled-components';
import CustomButton from '../Custom_button/Custom_button.component';

const CartDropdownContainer = styled.div`
	position: absolute;
	width: 340px;
	height: 440px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;
`;

const CartDropdownButton = styled(CustomButton)`
    margin-top: auto;
`;

const EmptyMessageContainer = styled.div`
	font-size: 18px;
	margin: 50px auto;
`;

const CartItemsContainer = styled.div`
	height: 340px;
	display: flex;
	flex-direction: column;
	overflow: scroll;
`;

export {
    CartDropdownButton,
    CartDropdownContainer,
    EmptyMessageContainer,
    CartItemsContainer
}