import styled from "styled-components";

const StyledAluraTubes = styled.div`
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
    aspect-ratio: 1/1;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 100px;
    height: auto;
    border-radius: 50%;
  }
  section {
    width: 100%;
    overflow: hidden;
    padding: 16px;
    div {
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-template-columns: repeat(auto-fill,minmax(110px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(110px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          /* padding-right: 20px; */
          text-align: center;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
    .aluratubes-wrapper {
        text-align: center;
        display: flex;
        gap: 0.5rem;
        padding: 0px 1rem 1rem;
    }
  }
`;

export default function AluraTubes(props) {
    const aluratubes_list = Object.keys(props.aluratubes);

    return (
        <StyledAluraTubes>
            <section>
                <h2>Favorite AluraTubes</h2>
                <div className="aluratubes-wrapper">
                    {aluratubes_list.map((aluratube) => {
                        const aluratubes = props.aluratubes[aluratube];
                        // console.log(aluratube);
                        // console.log(aluratubes);
                        return (
                            <a key={aluratubes.url} href={aluratubes.url}>
                                <img src={`https://github.com/${aluratubes.github}.png`} />
                                <span>
                                    {`@${aluratubes.github}`}
                                </span>
                            </a>
                        );
                    })}
                </div>
            </section>
        </StyledAluraTubes>
    );
}
