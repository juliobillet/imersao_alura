import styled from "styled-components";

const StyledFavorites = styled.div`
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
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(140px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(140px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 50px;
          text-align: center;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;

export default function Favorites(props) {
    const favorites_list = Object.keys(props.favorites);

    return (
        <StyledFavorites>
            <section>
                <h2>Favorites</h2>
                <div>
                    {favorites_list.map((favorite) => {
                        const favorites = props.favorites[favorite];
                        // console.log(favorite);
                        console.log(favorites);
                        return (
                            <a href={favorites.url}>
                                <img src={favorites.picture} />
                                <span>
                                    {favorites.user_name}
                                </span>
                            </a>
                        );
                    })}
                </div>
            </section>
        </StyledFavorites>
    );
}

{/* <section>
                <h2>Favorites</h2>
                <div>
                    {favorites_list.map((favorite) => {
                        const favorites = props.favorites[favorite];
                        return (
                            <a href={favorite.url}>
                                <img src={favorite.picture} />
                                <span>
                                    {favorite.user_name}
                                </span>
                            </a>
                        );
                    })}
                </div>
            </section> */}