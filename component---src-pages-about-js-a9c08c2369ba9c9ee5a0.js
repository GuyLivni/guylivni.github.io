(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{215:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",function(){return L});var a=r(4),i=r.n(a),n=r(1),s=r.n(n),o=r(220),l=r.n(o),d=r(2),c=r(219);function u(){var e=i()(["\n     width: 80%;\n  "]);return u=function(){return e},e}function f(){var e=i()(["\n    font-size: 2.5rem;\n  "]);return f=function(){return e},e}function p(){var e=i()(["\n    width: 70%;\n  "]);return p=function(){return e},e}function h(){var e=i()(["\n     width: 30%;\n     padding-right: 20px;\n  "]);return h=function(){return e},e}function m(){var e=i()(["\n    display: flex;\n  "]);return m=function(){return e},e}var g=Object(d.d)("div").withConfig({componentId:"sc-2e5mr-0"})(["",""],function(e){var t=e.theme;return Object(d.c)(["",";"],t.mq.huge(m()))}),b=Object(d.d)("div").withConfig({componentId:"sc-2e5mr-1"})(["",""],function(e){var t=e.theme;return Object(d.c)(["",";"],t.mq.huge(h()))}),y=Object(d.d)("div").withConfig({componentId:"sc-2e5mr-2"})(["",""],function(e){var t=e.theme;return Object(d.c)(["",";"],t.mq.huge(p()))}),w=Object(d.d)("h1").withConfig({componentId:"sc-2e5mr-3"})(["",""],function(e){var t=e.theme;return Object(d.c)(["margin-top:0;margin-bottom:1rem;font-size:3rem;color:",";"],t.colors.p600)}),v=Object(d.d)("h2").withConfig({componentId:"sc-2e5mr-4"})(["",""],function(e){var t=e.theme;return Object(d.c)(["margin-top:0;color:",";",";"],t.colors.p400,t.mq.huge(f()))}),S=Object(d.c)(["left:0;top:0;margin-bottom:20px;"]),E=Object(d.d)(l.a).withConfig({componentId:"sc-2e5mr-5"})(["",""],S),I=Object(d.d)("p").withConfig({componentId:"sc-2e5mr-6"})(["",""],function(e){var t=e.theme;return Object(d.c)(["color:",";",";"],t.colors.textColor,t.mq.huge(u()))});t.default=function(e){e.location;var t=e.data,r=t.avatar,a=t.contentfulPage,i=a.title,n=a.subTitle,o=a.paragraph,l=a.metadata;return s.a.createElement(g,null,s.a.createElement(c.a,{title:l.title,keywords:[l.keywords]}),s.a.createElement(b,null,s.a.createElement(w,null,i),s.a.createElement(v,null,n)),s.a.createElement(y,null,s.a.createElement(E,{fluid:r.childImageSharp.fluid,alt:"Author image"}),s.a.createElement(I,null,o.paragraph)))};var L="3157017241"},219:function(e,t,r){"use strict";var a=r(1),i=r.n(a),n=r(3),s=r.n(n),o=r(72),l=r.n(o),d=r(27);function c(e){var t=e.description,r=e.lang,a=e.meta,n=e.keywords,s=e.title,o=Object(d.d)().metadata,c=t||o.description;return i.a.createElement(l.a,{htmlAttributes:{lang:r},title:s,titleTemplate:"%s | "+o.title,meta:[{name:"description",content:c},{property:"og:url",content:o.siteUrl},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(n.length>0?{name:"keywords",content:n.join(", ")}:[]).concat(a)})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired};var u=c;t.a=u},220:function(e,t,r){"use strict";var a=r(14);t.__esModule=!0,t.default=void 0;var i,n=a(r(12)),s=a(r(48)),o=a(r(47)),l=a(r(108)),d=a(r(1)),c=a(r(3)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),r=t.fluid?t.fluid.src:t.fixed.src;return f[r]||!1},h=[];var m=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+r+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+a+"<img "+o+l+r+i+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var r=e.sizes,a=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:r,srcSet:a,src:i},u,{onLoad:s,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});b.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var r;r=e.call(this,t)||this;var a=!0,i=!1,n=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,i=!0),"undefined"==typeof window&&(a=!1),t.critical&&(a=!0,i=!1);var l=!(r.props.critical&&!r.props.fadeIn);return r.state={isVisible:a,imgLoaded:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:o},r.imageRef=d.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,s.default)((0,s.default)(r))),r.handleRef=r.handleRef.bind((0,s.default)((0,s.default)(r))),r}(0,n.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),r=t.fluid?t.fluid.src:t.fixed.src,f[r]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,a=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,m=e.fixed,y=e.backgroundColor,w=e.Tag,v=e.itemProp,S="boolean"==typeof y?"lightgray":y,E=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),I=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),L={title:t,alt:this.state.isVisible?"":r,style:E,className:p};if(h){var j=h;return d.default.createElement(w,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},d.default.createElement(w,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),S&&d.default.createElement(w,{title:t,style:{backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),j.base64&&d.default.createElement(b,(0,l.default)({src:j.base64},L)),j.tracedSVG&&d.default.createElement(b,(0,l.default)({src:j.tracedSVG},L)),this.state.isVisible&&d.default.createElement("picture",null,j.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),d.default.createElement(b,{alt:r,title:t,sizes:j.sizes,src:j.src,srcSet:j.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:r,title:t},j))}}))}if(m){var O=m,R=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:O.width,height:O.height},n);return"inherit"===n.display&&delete R.display,d.default.createElement(w,{className:(a||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(O.srcSet)},S&&d.default.createElement(w,{title:t,style:{backgroundColor:S,width:O.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:O.height}}),O.base64&&d.default.createElement(b,(0,l.default)({src:O.base64},L)),O.tracedSVG&&d.default.createElement(b,(0,l.default)({src:O.tracedSVG},L)),this.state.isVisible&&d.default.createElement("picture",null,O.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),d.default.createElement(b,{alt:r,title:t,width:O.width,height:O.height,sizes:O.sizes,src:O.src,srcSet:O.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:r,title:t,width:O.width,height:O.height},O))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:w,sizes:v,fixed:w,fluid:v,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var S=y;t.default=S}}]);
//# sourceMappingURL=component---src-pages-about-js-a9c08c2369ba9c9ee5a0.js.map