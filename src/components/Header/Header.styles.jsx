import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
        height: 70px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
`;

const LogoContainer = styled(Link)`
        height: 100%;
		width: 70px;
		padding: 25px;
`;

const OptionsContainer = styled.div`
        width: 50%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
`;

const OptionLink = styled(Link)`
    	padding: 10px 15px;
		cursor: pointer;
`;

const shake = keyframes`
    0% {   transform: translate(1px, 1px) rotate(0deg);    }
	10% {  transform: translate(-1px, -2px) rotate(-1deg); }
	20% {  transform: translate(-3px, 0px) rotate(1deg);   }
	30% {  transform: translate(3px, 2px) rotate(0deg);    }
	40% {  transform: translate(1px, -1px) rotate(1deg);   }
	50% {  transform: translate(-1px, 2px) rotate(-1deg);  }
	60% {  transform: translate(-3px, 1px) rotate(0deg);   }
	70% {  transform: translate(3px, 1px) rotate(-1deg);   }
	80% {  transform: translate(-1px, -1px) rotate(1deg);  }
	90% {  transform: translate(1px, 2px) rotate(0deg);    }
	100% { transform: translate(1px, -2px) rotate(-1deg);  }
`;

const ImgLogo = styled.img`
    	height: auto;
        width: 150%;
        &:hover {
            animation: ${shake} 1s;
			animation-iteration-count: infinite;
        }
`;

export {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
    ImgLogo
};