import styled from 'styled-components';

const CheckoutPageContainer = styled.div`
	width: 55%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;
`;

const CheckoutHeader = styled.div`
    width: 100%;
    padding: 10px 0;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid darkgrey;
`;

const HeaderBlock = styled.div`
    text-transform: capitalize;
	width: 23%;

	&:last-child {
		width: 8%;
	}
`;

const TotalContainer = styled.div`
	margin-top: 30px;
	font-size: 36px;
`;

const ButtonTotal = styled.div`
    display: flex;
	justify-content: space-between;
`;

const StripeContainer = styled.div`
	display: flex;
    align-self: center;
`;

const TestWarningContainer = styled.div`
    text-align: center;
	margin-top: 40px;
	font-size: 20px;
	color: red;
`;

export {
    CheckoutPageContainer,
    CheckoutHeader,
    HeaderBlock,
    TotalContainer,
    ButtonTotal,
    StripeContainer,
    TestWarningContainer
}