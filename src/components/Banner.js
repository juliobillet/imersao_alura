import config from "../../config.json"
import styled from "styled-components";

const StyledBanner = styled.div`
    width: 100%;
    height: 300px;
    background-image: ${({ bg }) => `url("${bg}")`};
    background-size: cover;
    background-position: center;
`;

export default function Banner() {
    return (
        <StyledBanner bg={config.banner} />
    );
}
