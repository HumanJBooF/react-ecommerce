import styled from 'styled-components';

const CollectionContainer = styled.div`
    display: flex;
	flex-direction: column;
`;

const TitleContainer = styled.h2`
    font-size: 38px;
	margin: 0 auto 30px;
`;

const ItemsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 10px;

	& .collection-item {
		margin-bottom: 30px;
	}
`;

export {
    CollectionContainer,
    TitleContainer,
    ItemsContainer
}