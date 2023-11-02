
// eslint-disable-next-line react/prop-types
const Container = ({children}) => {
    return (
        <div className="w-full max-w-[1200px] px-[25px] mx-auto">
            {children}
        </div>
    );
};

export default Container;