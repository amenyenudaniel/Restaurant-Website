import "./BlogPage.css";
import { useParams, Link } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import {
  gallery01,
  gallery02,
  gallery03,
  gallery04,
  gallery05,
  gallery06,
} from "../../assets";

const PText = () => {
  return (
    <div>
      <small className="p5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ullam velit
        officia beatae odit ratione, fuga ipsum vitae esse qui corporis tempora
        voluptates veritatis molestias ipsa magnam asperiores, numquam debitis
        nisi quod quam nobis atque alias. Rem incidunt eum, assumenda architecto
        quo nostrum tempore reiciendis ab voluptatem quod repellat fugit, dicta,
        numquam tenetur temporibus. Odit eveniet doloribus, iste cumque,
        explicabo quas commodi alias, labore ipsa eaque corrupti. Ratione nam
        vero beatae, perferendis laboriosam maxime commodi sint? Dolor nobis
        labore nam earum! Quia perferendis iure architecto aliquam unde animi
        consequuntur, voluptatibus officia labore recusandae iusto! At maiores,
        voluptas voluptatum voluptatem corporis dolorum eaque doloribus, unde
        vitae harum tenetur fugiat sit ab doloremque aliquam accusantium.
        Laboriosam obcaecati sapiente, possimus magnam soluta eos veniam
        architecto, maiores minima quis, expedita similique. Quos vero voluptate
        placeat laboriosam sed mollitia odio, provident aperiam non veniam
        exercitationem commodi qui fugiat. Nihil modi cupiditate cum laborum,
        officia unde vitae explicabo in? Voluptates minima, laudantium ea
        laboriosam officiis tempore atque? Repellendus neque animi in a
        consectetur iure, similique tempora architecto? Quas possimus
        consequatur quis aut quam, dignissimos deleniti, vitae, illo natus
        aliquid blanditiis. Quia, rerum nihil? Omnis libero quia velit minima
        voluptate deleniti totam, aliquam, magni excepturi quibusdam unde enim
        ut quis, odit officiis sunt fuga et veniam saepe quas eum ab voluptatum?
        Ut architecto cupiditate error, temporibus nesciunt ducimus molestiae
        illo omnis fugiat minus cumque in alias nisi voluptas aperiam, aut a
        aliquam quos ipsum! Dolor commodi amet velit facilis, perspiciatis illo
        et iure? Dolorum, soluta? Molestias, labore.
      </small>
    </div>
  );
};

const BlogPage = () => {
  const { id } = useParams();

  return (
    <div className="blogpage section__padding">
      <Link to="/Blog">
        <i className="icon__left" title="Back">
          <BsArrowLeftShort />
        </i>
      </Link>
      {id === "1" && (
        <div className="blog__page__container">
          <div className="blogpage__image">
            <img src={gallery01} alt="blogpost__image" />
          </div>

          <div className="blogpage__content">
            <h6>Honey Lime Rainbow Fruit Salad</h6>
            <p className="p__cormorant p4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              commodi nemo eligendi, quis accusantium tempora maiores quia nobis
              labore, dolorem, ratione explicabo.
            </p>
            <PText />
          </div>
        </div>
      )}

      {id === "2" && (
        <div className="blog__page__container">
          <div className="blogpage__image">
            <img src={gallery02} alt="blogpost__image" />
          </div>

          <div className="blogpage__content">
            <h6>Garlic-Butter Steak</h6>
            <p className="p__cormorant p4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              corrupti nostrum quod quas, in iure.
            </p>
            <PText />
          </div>
        </div>
      )}
      {id === "3" && (
        <div className="blog__page__container">
          <div className="blogpage__image">
            <img src={gallery03} alt="blogpost__image" />
          </div>

          <div className="blogpage__content">
            <h6>Honey Lime Rainbow</h6>
            <p className="p__cormorant p4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              delectus, exercitationem nulla illo fuga minima numquam sint!
              Exercitationem soluta explicabo aperiam perferendis unde at
              quibusdam.
            </p>
            <PText />
          </div>
        </div>
      )}

      {id === "4" && (
        <div className="blog__page__container">
          <div className="blogpage__image">
            <img src={gallery04} alt="blogpost__image" />
          </div>

          <div className="blogpage__content">
            <h6>25 Sophisticated Drink To Get You Feeling Fancy</h6>
            <p className="p__cormorant p4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, rem illo praesentium fugiat atque suscipit voluptates
              perspiciatis! Eum, magni molestias.
            </p>
            <PText />
          </div>
        </div>
      )}

      {id === "5" && (
        <div className="blog__page__container">
          <div className="blogpage__image">
            <img src={gallery05} alt="blogpost__image" />
          </div>

          <div className="blogpage__content">
            <h6>Garlic-Butter</h6>
            <p className="p__cormorant p4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic alias
              atque quis eum reprehenderit, obcaecati doloremque?
            </p>
            <PText />
          </div>
        </div>
      )}

      {id === "6" && (
        <div className="blog__page__container">
          <div className="blogpage__image">
            <img src={gallery06} alt="blogpost__image" />
          </div>

          <div className="blogpage__content">
            <h6>Honey fruit Salad</h6>
            <p className="p__cormorant p4">
              Lorem ipsum dolor sit amet consectetur adipisicing santium tempora
              maiores quia nobis labore, dolorem, ratione explicabo.
            </p>
            <PText />
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
