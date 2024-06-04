import PropTypes from 'prop-types';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ padding: '20px', textAlign: 'center', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: '#343a40', marginBottom: '20px' }}>{greeting}</h1>
      <main>
        <p style={{ lineHeight: '1.6', textAlign: 'justify' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis 
          repudiandae ab aliquid, hic amet nam rem eligendi veritatis cum 
          dicta esse animi adipisci consectetur deleniti quo voluptates 
          architecto expedita itaque! Lorem, ipsum dolor sit amet consectetur 
          adipisicing elit. Officiis error nobis, odit tenetur tempore 
          molestias reiciendis voluptatem sequi possimus eum esse, fugiat 
          eveniet, cum explicabo hic ipsum tempora vero et.
        </p>
        <p style={{ marginTop: '15px', fontStyle: 'italic', color: '#6c757d' }}>
          Próximamente encontrarás aquí nuestra amplia selección de productos.
        </p>
      </main>
    </div>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;