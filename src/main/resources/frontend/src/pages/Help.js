import React, { useState } from 'react'
import { UncontrolledCollapse, Button, CardBody, Card, Row,} from 'reactstrap'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Help = () =>{


    const [gotoLogin, setGotoLogin] = useState(false)
    const [gotoRegister, setGotoRegister] = useState(false)
    
    const initSearch = (e) => {
        e.preventDefault()

        setGotoLogin(true)
        
    }

    return(
        <div className="backGround" >
            <h2 style={{marginBottom: '15px', marginLeft: '10px', color: 'white', textAlign: 'center'}}>
                Frågor och svar
            </h2>
            <div>
           
                <Button color="success" id="registerToggler" style={{ marginBottom: '1rem', marginLeft: '10px'}}>Registering?</Button>
                    <UncontrolledCollapse toggler="#registerToggler">
                        <Card style={{ width: '100%', height: 'auto'}}>
                            <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                            similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                            dignissimos esse fuga! Minus, alias.
                            <p><Link to="/perform-register">Klicka här</Link></p>
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>          
            </div>
            <div>
                <Button color="success" id="loginToggler" style={{ marginBottom: '1rem', marginLeft: '10px'}}>Logga in?</Button>
                    <UncontrolledCollapse toggler="#loginToggler">
                        <Card style={{ width: '100%', height: 'auto' }}>
                            <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                            similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                            dignissimos esse fuga! Minus, alias.
                            <p><Link to="/perform-login">Klicka här</Link></p>
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>          
            </div> 
            <div>
                <Button color="success" id="rentoutToggler" style={{ marginBottom: '1rem', marginLeft: '10px'}}>Hyra ut?</Button>
                    <UncontrolledCollapse toggler="#rentoutToggler">
                        <Card style={{ width: '100%', height: 'auto' }}>
                            <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                            similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                            dignissimos esse fuga! Minus, alias.
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>          
            </div> 
            <div>
                <Button color="success" id="rentToggler" style={{ marginBottom: '1rem', marginLeft: '10px'}}>Söka boende?</Button>
                    <UncontrolledCollapse toggler="#rentToggler">
                        <Card style={{ width: '100%', height: 'auto' }}>
                            <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                            similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                            dignissimos esse fuga! Minus, alias.
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>          
            </div> 
            <div>
                <Button color="success" id="priceToggler" style={{ marginBottom: '1rem', marginLeft: '10px'}}>Priser?</Button>
                    <UncontrolledCollapse toggler="#priceToggler">
                        <Card style={{ width: '100%', height: 'auto' }}>
                            <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                            similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                            dignissimos esse fuga! Minus, alias.
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>          
            </div>                
        </div>
        
    )
}

export default Help