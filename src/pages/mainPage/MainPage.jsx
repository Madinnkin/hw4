

function MainPage({user}) {
    console.log(user)

    return (
        <>
            <h1>"Добро пожаловать {user.name} {user.surname} мы тебя ждали"</h1>
        </>
    );
}

export default MainPage;