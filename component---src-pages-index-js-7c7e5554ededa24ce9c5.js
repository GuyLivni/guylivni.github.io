(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{215:function(e,t,a){"use strict";a.r(t);var i=a(1),r=a.n(i),n=(a(220),a(4)),o=a.n(n),s=(a(47),a(2)),l=a(219),d=a.n(l),c=a(8);function u(){var e=o()(["\n    margin: 0 10px 20px;\n    font-size: 90px;\n  "]);return u=function(){return e},e}var f=Object(s.d)("div").withConfig({componentId:"ryw1yh-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;"]),p=Object(s.d)("p").withConfig({componentId:"ryw1yh-1"})(["",""],function(e){var t=e.theme;return Object(s.c)(["margin:0;align-self:end;color:",";font-size:24px;font-weight:",";"],t.colors.p600,t.fontWeight.bold)}),h=Object(s.d)("h1").withConfig({componentId:"ryw1yh-2"})(["",""],function(e){var t=e.theme;return Object(s.c)(["color:",";font-size:75px;font-weight:",";margin:0;",";"],t.colors.p600,t.fontWeight.bold,t.mq.medium(u()))}),m=Object(s.d)("p").withConfig({componentId:"ryw1yh-3"})(["",""],function(e){var t=e.theme;return Object(s.c)(["color:",";font-size:23px;font-weight:",";"],t.colors.p600,t.fontWeight.bold)}),g=Object(s.d)(d.a).withConfig({componentId:"ryw1yh-4"})(["",""],function(e){var t=e.theme;return Object(s.c)(["border-radius:50%;left:0;top:0;border:3px solid ",";margin:0;"],t.colors.p600)});var y=function(e){var t=e.avatar;return r.a.createElement(f,null,r.a.createElement(g,{fixed:t.childImageSharp.fixed,alt:c.c.MY_USERNAME}),r.a.createElement(p,null,c.d.HEY),r.a.createElement(h,null,c.d.IM_GUY),r.a.createElement(m,null,c.d.WHAT_I_DO))},b=(a(107),a(45)),w=a.n(b),v=a(43),S=Object(s.d)("div").withConfig({componentId:"mbdha2-0"})(["display:flex;justify-content:center;align-items:center;"]),E=Object(s.d)("a").withConfig({componentId:"mbdha2-1"})(["box-shadow:none;"]),I=Object(s.d)(function(e){var t=e.component,a=w()(e,["component"]);return r.a.cloneElement(t,a)}).withConfig({componentId:"mbdha2-2"})(["",""],function(e){var t=e.theme;return Object(s.c)(["font-size:20px;color:",";margin:0 10px;transition:color 250ms cubic-bezier(0.4,0,0.2,1) 0s,transform ",";:hover{transform:translate3d(0px,-1px,0px);color:",";}"],t.colors.p600,t.transitions.default,t.colors.p400)});var L=function(e){var t=e.twitter,a=e.github,i=e.linkedin,n=e.medium,o=[{Icon:v.c,url:a,name:"github"},{Icon:v.e,url:n,name:"medium"},{Icon:v.f,url:t,name:"twitter"},{Icon:v.d,url:i,name:"linkedin"}];return r.a.createElement(S,null,o.map(function(e,t){var a=e.Icon,i=e.url,n=e.name;return r.a.createElement(E,{"aria-label":n,key:t,href:i,target:"_blank",rel:"noopener"},r.a.createElement(I,{component:r.a.createElement(a,null)}))}))},x=a(218);a.d(t,"pageQuery",function(){return j});t.default=function(e){e.location;var t=e.data,a=t.avatar,n=t.site.siteMetadata.social;return r.a.createElement(i.Fragment,null,r.a.createElement(x.a,{title:"Home",keywords:["guylivni, guy livni site"]}),r.a.createElement(y,{avatar:a}),r.a.createElement(L,n))};var j="3255858939"},217:function(e){e.exports={data:{site:{siteMetadata:{title:"Guy's personal site",description:"Personal site by Guy Livni.",author:"Guy Livni"}}}}},218:function(e,t,a){"use strict";var i=a(217),r=a(1),n=a.n(r),o=a(3),s=a.n(o),l=a(71),d=a.n(l);function c(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,l=i.data.site,c=t||l.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired};var u=c;t.a=u},219:function(e,t,a){"use strict";var i=a(14);t.__esModule=!0,t.default=void 0;var r,n=i(a(12)),o=i(a(46)),s=i(a(45)),l=i(a(105)),d=i(a(1)),c=i(a(3)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var m=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+"<img "+s+l+a+r+t+o+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,o=e.onLoad,c=e.onError,u=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:r},u,{onLoad:o,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,n=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:r,fadeIn:n,hasNoScript:l,seenBefore:s},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,w=e.Tag,v=e.itemProp,S="boolean"==typeof b?"lightgray":b,E=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),I=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),L={title:t,alt:this.state.isVisible?"":a,style:E,className:p};if(h){var x=h;return d.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},d.default.createElement(w,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),S&&d.default.createElement(w,{title:t,style:{backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),x.base64&&d.default.createElement(y,(0,l.default)({src:x.base64},L)),x.tracedSVG&&d.default.createElement(y,(0,l.default)({src:x.tracedSVG},L)),this.state.isVisible&&d.default.createElement("picture",null,x.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),d.default.createElement(y,{alt:a,title:t,sizes:x.sizes,src:x.src,srcSet:x.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},x))}}))}if(m){var j=m,z=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete z.display,d.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},S&&d.default.createElement(w,{title:t,style:{backgroundColor:S,width:j.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:j.height}}),j.base64&&d.default.createElement(y,(0,l.default)({src:j.base64},L)),j.tracedSVG&&d.default.createElement(y,(0,l.default)({src:j.tracedSVG},L)),this.state.isVisible&&d.default.createElement("picture",null,j.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),d.default.createElement(y,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,srcSet:j.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:j.width,height:j.height},j))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:w,sizes:v,fixed:w,fluid:v,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var S=b;t.default=S},220:function(e,t,a){"use strict";a(106)("fixed",function(e){return function(){return e(this,"tt","","")}})}}]);
//# sourceMappingURL=component---src-pages-index-js-7c7e5554ededa24ce9c5.js.map