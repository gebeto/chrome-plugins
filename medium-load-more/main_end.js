console.log("Full article button loaded!");

async function loadMore() {
	const data = await fetch(window.location, {credentials: 'omit'}).then(res => res.text());
	const wrapper = document.createElement('div')
	wrapper.innerHTML = data;
	document.querySelector('.postArticle-content').innerHTML = wrapper.querySelector('.postArticle-content').innerHTML

	const styles = document.createElement('style');
	styles.innerHTML = '.postFade:before { display: none !important; } .postFade {margin-top: 200px; opacity: 0.4;}';
	document.body.appendChild(styles);
}

const postMore = document.querySelector('[data-post-id]');
if (postMore.getAttribute('data-disable-client-nav')) {
	const postId = document.querySelector('[data-post-id]').getAttribute('data-post-id');

	// const newButton = document.createElement('a');
	// newButton.className = postMore.className;
	// newButton.textContent = 'Load full article';
	// newButton.style.marginLeft = '10px';
	// newButton.addEventListener('click', loadMore);
	loadMore();


	const asideWrapper = document.createElement('button');
	asideWrapper.innerHTML = `
		<aside class="u-marginAuto u-maxWidth1032 js-postLeftSidebar">
			<div class="u-foreground u-top0 u-fixed u-sm-hide js-postShareWidget u-transition--fadeIn300" data-scroll="fixed" style="transform: translateY(200px);">
				<ul>
					<li class="u-marginVertical10">
						<div class="multirecommend js-actionMultirecommend u-flexCenter" data-post-id="${postId}" data-is-icon-29px="true" data-has-recommend-list="true" data-source="post_share_widget-----${postId}---------------------clap_sidebar">
							<div class="u-relative u-foreground">
								<button class="button button--primary button--large button--chromeless u-accentColor--buttonNormal button--withIcon button--withSvgIcon clapButton js-actionMultirecommendButton clapButton--darker" data-action="multivote" data-action-value="${postId}" data-action-type="long-press" data-action-source="post_share_widget-----${postId}---------------------clap_sidebar" aria-label="Clap"><span class="button-defaultState"><span class="svgIcon svgIcon--clap svgIcon--29px"><svg class="svgIcon-use" width="29" height="29"><g fill-rule="evenodd"><path d="M13.739 1l.761 2.966L15.261 1z"></path><path d="M16.815 4.776l1.84-2.551-1.43-.471z"></path><path d="M10.378 2.224l1.84 2.551-.408-3.022z"></path><path d="M22.382 22.622c-1.04 1.04-2.115 1.507-3.166 1.608.168-.14.332-.29.492-.45 2.885-2.886 3.456-5.982 1.69-9.211l-1.101-1.937-.955-2.02c-.315-.676-.235-1.185.245-1.556a.836.836 0 0 1 .66-.16c.342.056.66.28.879.605l2.856 5.023c1.179 1.962 1.379 5.119-1.6 8.098m-13.29-.528l-5.02-5.02a1 1 0 0 1 .707-1.701c.255 0 .512.098.707.292l2.607 2.607a.442.442 0 0 0 .624-.624L6.11 15.04l-1.75-1.75a.998.998 0 1 1 1.41-1.413l4.154 4.156a.44.44 0 0 0 .624 0 .44.44 0 0 0 0-.624l-4.152-4.153-1.172-1.171a.998.998 0 0 1 0-1.41 1.018 1.018 0 0 1 1.41 0l1.172 1.17 4.153 4.152a.437.437 0 0 0 .624 0 .442.442 0 0 0 0-.624L8.43 9.222a.988.988 0 0 1-.291-.705.99.99 0 0 1 .29-.706 1 1 0 0 1 1.412 0l6.992 6.993a.443.443 0 0 0 .71-.501l-1.35-2.856c-.315-.676-.235-1.185.246-1.557a.85.85 0 0 1 .66-.16c.342.056.659.28.879.606L20.628 15c1.573 2.876 1.067 5.545-1.544 8.156-1.396 1.397-3.144 1.966-5.063 1.652-1.713-.286-3.463-1.248-4.928-2.714zM12.99 6.976l2.562 2.562c-.497.607-.563 1.414-.155 2.284l.265.562-4.257-4.257a.98.98 0 0 1-.117-.445c0-.267.104-.517.292-.706a1.023 1.023 0 0 1 1.41 0zm8.887 2.06c-.375-.557-.902-.916-1.486-1.011a1.738 1.738 0 0 0-1.342.332c-.376.29-.61.656-.712 1.065a2.1 2.1 0 0 0-1.095-.562 1.776 1.776 0 0 0-.992.128l-2.636-2.636a1.883 1.883 0 0 0-2.658 0 1.862 1.862 0 0 0-.478.847 1.886 1.886 0 0 0-2.671-.012 1.867 1.867 0 0 0-.503.909c-.754-.754-1.992-.754-2.703-.044a1.881 1.881 0 0 0 0 2.658c-.288.12-.605.288-.864.547a1.884 1.884 0 0 0 0 2.659l.624.622a1.879 1.879 0 0 0-.91 3.16l5.019 5.02c1.595 1.594 3.515 2.645 5.408 2.959a7.16 7.16 0 0 0 1.173.098c1.026 0 1.997-.24 2.892-.7.279.04.555.065.828.065 1.53 0 2.969-.628 4.236-1.894 3.338-3.338 3.083-6.928 1.738-9.166l-2.868-5.043z"></path></g></svg></span></span><span class="button-activeState"><span class="svgIcon svgIcon--clapFilled svgIcon--29px"><svg class="svgIcon-use" width="29" height="29"><g fill-rule="evenodd"><path d="M13.738 1l.762 2.966L15.262 1z"></path><path d="M18.634 2.224l-1.432-.47-.408 3.022z"></path><path d="M11.79 1.754l-1.431.47 1.84 2.552z"></path><path d="M24.472 14.307l-3.023-5.32c-.287-.426-.689-.705-1.123-.776a1.16 1.16 0 0 0-.911.221c-.297.231-.474.515-.535.84.017.022.036.04.053.063l2.843 5.001c1.95 3.564 1.328 6.973-1.843 10.144a8.46 8.46 0 0 1-.549.501c1.205-.156 2.328-.737 3.351-1.76 3.268-3.268 3.041-6.749 1.737-8.914"></path><path d="M14.58 10.887c-.156-.83.096-1.569.692-2.142L12.78 6.252c-.5-.504-1.378-.504-1.879 0-.178.18-.273.4-.329.63l4.008 4.005z"></path><path d="M17.812 10.04c-.218-.323-.539-.55-.88-.606a.814.814 0 0 0-.644.153c-.176.137-.713.553-.24 1.566l1.43 3.025a.539.539 0 1 1-.868.612L9.2 7.378a.986.986 0 1 0-1.395 1.395l4.401 4.403a.538.538 0 1 1-.762.762L7.046 9.54 5.802 8.295a.99.99 0 0 0-1.396 0 .981.981 0 0 0 0 1.394l1.241 1.241 4.402 4.403a.537.537 0 0 1 0 .761.535.535 0 0 1-.762 0L4.89 11.696a.992.992 0 0 0-1.399-.003.983.983 0 0 0 0 1.395l1.855 1.854 2.763 2.765a.538.538 0 0 1-.76.761l-2.765-2.764a.982.982 0 0 0-1.395 0 .989.989 0 0 0 0 1.395l5.32 5.32c3.371 3.372 6.64 4.977 10.49 1.126C21.74 20.8 22.271 18 20.62 14.982l-2.809-4.942z"></path></g></svg></span></span>
								</button>
							</div><span class="u-relative u-background js-actionMultirecommendCount u-marginLeft5"><button class="button button--chromeless u-baseColor--buttonNormal js-multirecommendCountButton" data-action="show-recommends" data-action-value="${postId}"></button></span></div>
					</li>
					<li class="u-marginVertical10 u-marginLeft3">
						<button class="button button--large button--dark button--chromeless is-touchIconFadeInPulse u-baseColor--buttonDark button--withIcon button--withSvgIcon button--bookmark js-bookmarkButton" title="Bookmark this story to read later" aria-label="Bookmark this story to read later" data-action="remove-from-bookmarks" data-action-value="${postId}" data-action-source="post_share_widget-----${postId}---------------------bookmark_sidebar"><span class="button-defaultState"><span class="svgIcon svgIcon--bookmark svgIcon--29px"><svg class="svgIcon-use" width="29" height="29"><path d="M19.385 4h-9.77A2.623 2.623 0 0 0 7 6.615V23.01a1.022 1.022 0 0 0 1.595.847l5.905-4.004 5.905 4.004A1.022 1.022 0 0 0 22 23.011V6.62A2.625 2.625 0 0 0 19.385 4zM21 23l-5.91-3.955-.148-.107a.751.751 0 0 0-.884 0l-.147.107L8 23V6.615C8 5.725 8.725 5 9.615 5h9.77C20.275 5 21 5.725 21 6.615V23z" fill-rule="evenodd"></path></svg></span></span><span class="button-activeState"><span class="svgIcon svgIcon--bookmarkFilled svgIcon--29px"><svg class="svgIcon-use" width="29" height="29"><path d="M19.385 4h-9.77A2.623 2.623 0 0 0 7 6.615V23.01a1.022 1.022 0 0 0 1.595.847l5.905-4.004 5.905 4.004A1.022 1.022 0 0 0 22 23.011V6.62A2.625 2.625 0 0 0 19.385 4z" fill-rule="evenodd"></path></svg></span></span>
						</button>
					</li>
					<li class="u-marginVertical10 u-marginLeft3"><a class="button button--dark button--chromeless u-baseColor--buttonDark button--withIcon button--withSvgIcon is-touched" href="https://medium.com/p/${postId}/share/twitter" title="Share on Twitter" aria-label="Share on Twitter" target="_blank" data-action-source="post_share_widget"><span class="button-defaultState"><span class="svgIcon svgIcon--twitterFilled svgIcon--29px"><svg class="svgIcon-use" width="29" height="29"><path d="M22.053 7.54a4.474 4.474 0 0 0-3.31-1.455 4.526 4.526 0 0 0-4.526 4.524c0 .35.04.7.082 1.05a12.9 12.9 0 0 1-9.3-4.77c-.39.69-.61 1.46-.65 2.26.03 1.6.83 2.99 2.02 3.79-.72-.02-1.41-.22-2.02-.57-.01.02-.01.04 0 .08-.01 2.17 1.55 4 3.63 4.44-.39.08-.79.13-1.21.16-.28-.03-.57-.05-.81-.08.54 1.77 2.21 3.08 4.2 3.15a9.564 9.564 0 0 1-5.66 1.94c-.34-.03-.7-.06-1.05-.08 2 1.27 4.38 2.02 6.94 2.02 8.31 0 12.86-6.9 12.84-12.85.02-.24.01-.43 0-.65.89-.62 1.65-1.42 2.26-2.34-.82.38-1.69.62-2.59.72a4.37 4.37 0 0 0 1.94-2.51c-.84.53-1.81.9-2.83 1.13z"></path></svg></span></span></a></li>
					<li class="u-marginVertical10 u-marginLeft3"><a class="button button--dark button--chromeless u-baseColor--buttonDark button--withIcon button--withSvgIcon button--dark button--chromeless" href="https://medium.com/p/${postId}/share/facebook" title="Share on Facebook" aria-label="Share on Facebook" target="_blank" data-action-source="post_share_widget"><span class="button-defaultState"><span class="svgIcon svgIcon--facebookSquare svgIcon--29px"><svg class="svgIcon-use" width="29" height="29"><path d="M23.209 5H5.792A.792.792 0 0 0 5 5.791V23.21c0 .437.354.791.792.791h9.303v-7.125H12.72v-2.968h2.375v-2.375c0-2.455 1.553-3.662 3.741-3.662 1.049 0 1.95.078 2.213.112v2.565h-1.517c-1.192 0-1.469.567-1.469 1.397v1.963h2.969l-.594 2.968h-2.375L18.11 24h5.099a.791.791 0 0 0 .791-.791V5.79a.791.791 0 0 0-.791-.79"></path></svg></span></span></a></li>
				</ul>
			</div>
		</aside>`;
	const aside = asideWrapper.children[0];
	console.log(aside);
	document.querySelector('main').parentNode.appendChild(aside);

	// postMore.parentNode.appendChild(newButton);
}