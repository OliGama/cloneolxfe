import styled from 'styled-components'

export const PageArea = styled.div`
    .card-ad {
    background-color: #FFF;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 0px 3px #999;
    margin-bottom: 20px;
    max-width: 400px;
    }

    .area-ad {
        .area--title-ad {
            text-align: right;
            padding-right: 20px;
            padding-left: 20px;
            font-weight: bold;
            font-size: 14px;
        }

        .area--text-ad {
            text-align: right;
            padding-right: 20px;
            padding-left: 20px;
            font-size: 12px;
        }
        
        .list {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
    }
    }

    form {
        margin-top: 20px;
        background-color: #FFF;
        border-radius: 5px;
        padding: 20px;
        box-shadow: 0px 0px 3px #999;
        margin-bottom: 20px;
        max-width: 80%;


        .area {
            display: flex;
            align-items: center;
            padding: 10px;

            .area--title {
                width: 300px;
                text-align: right;
                padding-right: 20px;
                font-weight: bold;
                font-size: 14px;
            }

            .area--input {
                flex: 1;

                input {
                    width: 100%;
                    font-size: 14px;
                    padding: 5px;
                    border: 1px solid #DDD;
                    border-radius: 3px;
                    outline: none;

                    &:focus {
                        border: 1px solid #333;
                        color: #333;
                    }
                }

                button {
                    background-color: #2510a3;
                    border: 0;
                    outline: 0;
                    padding: 5px 10px;
                    border-radius: 4px;
                    color: #FFF;
                    font-size: 15px;
                    cursor: pointer;

                    &:hover {
                        background-color: #006FCE;
                    }
                }
            }
        }
    }
`  
