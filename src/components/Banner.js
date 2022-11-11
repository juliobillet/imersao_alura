import styled from "styled-components";
import config from "../../config.json";

const StyledBanner = styled.div`
    width: 100%;
    height: 300px;
    background-image: ${({ bg }) => `url("${bg}")`};
    background-size: cover;
    background-position: center;
    .banner {
        max-width: 100%;
        width: 100%;
        height: 300px;
        object-fit: none;
    }
`;

export default function Banner()    {
    return (
        <StyledBanner>
            <BannerImage />
        </StyledBanner>
    );
}

function    BannerImage()   {
    return (
        <div>
            <img className="banner" src={config.banner} />
        </div>
    );
}
