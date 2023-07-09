import React from 'react';
import Button from '../../components/common/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const startQuiz = () => {
        navigate('/quiz');
    };

    return (
        <div>
            Home
            <Button title={'Start'} onClick={startQuiz}/>
        </div>
    );
};

export default Home;