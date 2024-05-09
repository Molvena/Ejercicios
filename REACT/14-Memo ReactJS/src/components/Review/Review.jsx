export const  Review = ({ comment, score }) => {
	console.log('Renderizando Review');

  return (
    <div>
      <p>
        {comment} - {score}
      </p>
    </div>
  );
};

