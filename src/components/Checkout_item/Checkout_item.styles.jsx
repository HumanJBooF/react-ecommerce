import styled from 'styled-components';

const CheckoutItemContainer = styled.div`
    width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
`;

const ImageContainer = styled.div`
    width: 23%;
	padding-right: 15px;

	img {
	    width: 100%;
		height: 100%;
	}
`;

const TextContainer = styled.div`
    width: 23%;
`;

const QuantityContainer = styled(TextContainer)`
    display: flex;

	div {
		cursor: pointer;
	}

	.grayed {
		display: none;
	}

    span {
		margin: 0 10px;
	}
`;

const RemoveButtonContainer = styled.div`
	padding-left: 12px;
	cursor: pointer;
`;

export {
	CheckoutItemContainer,
	ImageContainer,
	QuantityContainer,
	RemoveButtonContainer,
	TextContainer
}