import React, { Component} from 'react'
import { Parallax } from 'react-scroll-parallax';
import "./InlineGallery.css"

// const InlineGallery = ({ pictures }) => {
class InlineGallery extends Component {
    constructor(props) {
        super(props);
        this.thisGallery = React.createRef();
        this.leftToRight = props.leftToRight;
        this.transitionDuration = 4;
        this.timingFunction = "cubic-bezier(0.150, 0.000, 0.850, 1.000)";
        this.state = {
            animatingBackwards: !this.props.leftToRight,
            paused: false
        }
    }

    sleep = (ms) => new Promise(r => setTimeout(r, ms));
    
    async componentDidMount() {
        let gallery =  this.thisGallery.current;
        let width = gallery.scrollWidth - gallery.clientWidth;
        let content = gallery.children;
        for(let i = 0; i < content.length; i++){
            if(this.leftToRight) content[i].style.left = - width + "px";
            else content[i].style.left = 0 + "px";
            content[i].style.transitionProperty = "left";
            content[i].style.transitionDuration = content.length * this.transitionDuration  + "s";
            content[i].style.transitionTimingFunction = this.timingFunction;

            // content[i].style.flexBasis = window.screen.width / (content.length * 4) + "%";
            content[i].style.flexBasis = content.length / 8 * 100 + "%";
        }

        await this.sleep(50);
        
        for(let i = 0; i < content.length; i++){
            if(this.leftToRight) content[i].style.left = 0 + "px";
            else content[i].style.left = - width + "px";
        }
        content[0].addEventListener("transitionend", () => {this.setState({animatingBackwards: !this.state.animatingBackwards}, this.scrollGallery)});
    }

    scrollGallery  = () => {
        if(!this.state.paused) {
            let gallery =  this.thisGallery.current;
            let width = gallery.scrollWidth - gallery.clientWidth;
            let content = gallery.children;
            for(let i = 0; i < content.length; i++){
                if(!this.state.animatingBackwards) content[i].style.left = 0 + "px";
                else content[i].style.left = - width + "px";
            }
        }
    }

    pauseAnim = (e) => {
        let target = e.currentTarget;
        let content = target.children
        for(let i = 0; i < content.length; i++){
            content[i].style.webkitAnimationPlayState = "paused";
            content[i].style.transitionDuration = "0.1s";
            let computedStyle = window.getComputedStyle(content[i]).getPropertyValue('left');
            content[i].style.left = computedStyle;
        }
        this.setState({paused: true}, () => this.setState({animatingBackwards: !this.state.animatingBackwards}));
    }
    resumeAnim = (e) => {
        let target = e.currentTarget;
        let content = target.children
        for(let i = 0; i < content.length; i++){
            content[i].style.webkitAnimationPlayState = "running";
            content[i].style.transitionDuration = content.length * this.transitionDuration  + "s";
        }
        this.setState({paused: false}, this.scrollGallery);
    }
    render() {
        return (
            <div className='inline-gallery' onMouseEnter={this.pauseAnim} onMouseLeave={this.resumeAnim} ref={this.thisGallery} >
                {this.props.content.map((elm ,id) => {
                    if(elm.type === "img"){
                        return(
                            <div className="pic" key={id} style={{left: "0"}}>
                                <Parallax className="parallax" translateY={["-50px", "50px"]}>
                                    <img src={elm.src} alt={elm.alt} />
                                </Parallax>
                            </div>
                        )
                    }
                    if(elm.type === "vid"){
                        return(
                            <div className="pic" key={id} style={{left: "0"}}>
                                <Parallax className="parallax" translateY={["-50px", "50px"]}>
                                    <video src={elm.src} alt={elm.alt} controls autoPlay loop muted/>
                                </Parallax>
                            </div>
                        )
                    }
                    else return(<></>)
                })
                }
            </div>
        )
    };
}

export default InlineGallery