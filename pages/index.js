import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import Banner from "../src/components/Banner";

function HomePage() {
    const homepage_style = {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        // backgroundColor: "red",
    };

    return (
        <>
            <CSSReset />
            <div>
                <div style={homepage_style}>
                    <Menu />
                    <Banner />
                    <Header />
                    <Timeline playlists={config.playlists} />
                </div>
            </div>
        </>
    );
}

export default HomePage

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     );
// }

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        /* margin-top: 50px; */
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header() {
    return (
        <StyledHeader>
            {/* <img src="banner" /> */}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    );
}

function Timeline(props) {
    // console.log("Dentro do componente", props);
    const playlist_names = Object.keys(props.playlists);
    // Statement
    // Retorno por expressão
    // map o tempo todo
    return (
        <StyledTimeline>
            {playlist_names.map((playlist_name) => {
                const videos = props.playlists[playlist_name];
                console.log(playlist_name);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlist_name}</h2>
                        <div>
                            {
                                videos.map((video) => {
                                    return (
                                        <a href={video.url}>
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    );
                                })
                            }
                        </div>
                    </section>
                );
            })}
        </StyledTimeline>
    );
}
