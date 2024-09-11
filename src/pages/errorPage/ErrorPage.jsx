import React from 'react';

const ErrorPage = ({user}) => {
    return (
        <div>
            Тебе сюда нельзя - {user.name} {user.surname}

        </div>
    );
};

export default ErrorPage;