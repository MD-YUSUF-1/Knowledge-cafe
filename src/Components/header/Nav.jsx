import profile from "../../assets/images/profile.png"

const Nav = () => {
    return (
        <div className="flex justify-between w-5/6 mx-auto border-b-2 pb-4 my-4">
            <h3 className="text-4xl font-bold
            ">Knowledge Cafe</h3>

            <img src={profile} alt="" />
            
        </div>
    );
};

export default Nav;