import styled from 'styled-components';

const AlertStyled = styled.div`
  .alert {
    padding: 20px 40px 20px 15px;
    margin-bottom: 15px;
    margin-left: 15px;
    border: 1px solid transparent;
    border-radius: 4px;
    display: flex;
    font-size: 16px;
    word-wrap: break-word;
    box-shadow: 0 0.5rem 2rem -0.25rem rgba(0,0,0,.3);
    position: fixed;
    z-index: 1200;
    
    ${props => props.position && {
     [props.position]: '24px'
}}
    ${props => props.type === 'success' && {
  backgroundColor: '#EBFEF7',
  borderColor:'#07DA89',
  color: '#048B57',
}}
    
    ${props => props.type === 'info' && {
  backgroundColor: '#EBF2FF',
  borderColor: '#5C9AFF',
  color: '#0E69FF',
}}
    
    ${props => (props.type === 'danger' || props.type === 'custom danger') && {
  backgroundColor: '#FCEDEE',
  borderColor: '#EA7179',
  color:'#DF2A36',
}}
    
    ${props => props.type === 'warning' && {
  backgroundColor: '#FFEDD6',
  borderColor: '#FFB65C',
  color:'#F08400',
}}
    
    &:last-child {
      margin-bottom: 0;
    }
    
    &-dismiss {
      position: absolute;
      right: 0;
      top: 47%;
      transform: translateY(-50%);
      cursor: pointer;
      pointer-events: auto;
    }
    
    &-message {
        max-width: 300px;
        display: inline-block;
        line-height: 22px;
    }
    
    .icon {
      margin-top: 0;
    }
    
    .icon, .alert-lead {
      margin-right: 15px;
      font-weight: normal;
      line-height: 22px;
    }
  }
`;

export default AlertStyled;
