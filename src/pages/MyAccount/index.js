import React from 'react'
import { Link } from 'react-router-dom'
import { 
    PageContainer, 
    PageTitle, 
    ErrorMessage } from '../../components/MainComponents';
import { PageArea } from './styled';

const Page = () => {
    
    return (
                
            <div>
                <Link to='/'>Home</Link>
                <PageContainer>
                    <h2>Minha Conta</h2>
                    <div className='ImageProfile'>
                        <img src='/avatar.png' />
                    </div>
                </PageContainer>
            </div>
                
    )
}

export default Page