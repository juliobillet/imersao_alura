import styled from "styled-components";

const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    overflow: hidden;
    padding: 16px;
    div {
      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;

export default function Timeline({ filter_value, ...props }) {
  // console.log("Dentro do componente", props);
  const playlist_names = Object.keys(props.playlists);
  // Statement
  // Retorno por expressão
  // map o tempo todo
  return (
    <StyledTimeline>
      {playlist_names.map((playlist_name) => {
        const videos = props.playlists[playlist_name];
        // console.log(playlist_name);
        // console.log(videos);
        return (
          <section key={playlist_name}>
            <h2>{playlist_name}</h2>
            <div>
              {
                videos
                  .filter((video) => {
                    const video_title_normalized = video.title.toLowerCase();
                    const filter_value_normalized = filter_value.toLowerCase();
                    return (video_title_normalized.includes(filter_value_normalized));
                  })
                  .map((video) => {
                    return (
                      <a key={video.url} href={video.url}>
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
