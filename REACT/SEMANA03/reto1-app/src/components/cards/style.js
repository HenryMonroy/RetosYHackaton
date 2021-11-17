import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 800px;

    .left {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin: 100px 50px;
    }

    .left .description {
        flex: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #6C39B1;
        border-radius: 50px 0 0 0;
    }

    .left .description .by {
        color: #ffffff;
        font-size: 20px;
    }

    .left .description .title {
        color: #ffffff;
        font-size: 40px;
    }

    .left .arrow {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #FFBF00;
    }

    .left .arrow svg {
        height: 50px;
        color: #ffffff;
    }

    .left .rectangle {
        flex: 3;
        width: 0;
        height: 0;
        border-bottom: 100px solid #1abc9b; 
        border-left: 750px solid #6C39B1;
    }

    .rigth {
        display: flex;
        flex: 2;
        flex-wrap: wrap;
        margin: 150px 50px;
    }

    .rigth .card{
        width: 400px;
        margin: 0 20px;
    }

    .rigth .card img {
        width: 75px;
    }

    .rigth .card div{
        display: flex;
        align-items: center;
    }

    .rigth .card div div{
        font-size: 30px;
        font-weight: bold;
        padding: 15px;
    }

    .rigth .card p{
        font-size: 15px;
    }
`