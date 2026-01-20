import styled from 'styled-components';

const Logo = styled.img`

    height: 15vh;
    width: auto;

`

export default function ApplicationLogo(props) {
    return (
        <Logo
            {...props}
            src="/images/thales-logo-removebg.png"
            alt="Thales Logo"
            
        />
    );
}
