

const DynamicPage = ({params ,searchParams}) => {
    return (
        <div>
            <h1>This is dynamic page: {params.id}</h1>
            <h2>Search by category :{searchParams.category}</h2>
        </div>
    );
};

export default DynamicPage;