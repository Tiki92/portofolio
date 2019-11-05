import React, { Component } from 'react'

export default class Work extends Component{
	render() {
	return (
	<div>
		<section class="colorlib-work" data-section="work">
			<div class="colorlib-narrow-content">
				<div class="row">
					<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
						<span class="heading-meta">My Work</span>
						<h2 class="colorlib-heading animate-box">Recent Work</h2>
					</div>
				</div>

				<div class="row">
				<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
						<div class="project" style={{backgroundImage: 'url(images/iWish.jpg)'}}>
							<div class="desc">
								<div class="con">
									<h3><a href="https://play.google.com/store/apps/details?id=com.alupigus.iwish">iWish</a></h3>
									<span>Flutter Android App</span>
								</div>
							</div>
						</div>
					</div>

					<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
						<div class="project" style={{backgroundImage: 'url(images/django-logo.jpg)'}}>
							<div class="desc">
								<div class="con">
									<h3><a href="https://github.com/Tiki92/HitchHike">HitchHike</a></h3>
									<span>Django Web App</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
						<div class="project" style={{backgroundImage: 'url(images/django-logo.gif)'}}>
							<div class="desc">
								<div class="con">
									<h3><a href="https://github.com/Tiki92/EveryoneCan-Code">Everyone-Can-Code</a></h3>
									<span>Website</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6 animate-box" data-animate-effect="fadeInTop">
						<div class="project" style={{backgroundImage: 'url(images/javascript.jpg)'}}>
							<div class="desc">
								<div class="con">
									<h3><a href="https://github.com/Tiki92/JS">JavaScript</a></h3>
									<span>Website</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6 animate-box" data-animate-effect="fadeInBottom">
						<div class="project" style={{backgroundImage: 'url(images/python.jpg)'}}>
							<div class="desc">
								<div class="con">
									<h3><a href="https://github.com/Tiki92/small_python-projects">Small Python Projects</a></h3>
									<span>Software</span>
								</div>
							</div>
						</div>
					</div>
					{/*
					<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
						<div class="project" style={{backgroundImage: 'url(images/about.jpg)'}}>
							<div class="desc">
								<div class="con">
									<h3><a href="work.html">Work 05</a></h3>
									<span>Graphic, Logo</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
						<div class="project" style={{backgroundImage: 'url(images/about.jpg)'}}>
							<div class="desc">
								<div class="con">
									<h3><a href="work.html">Work 06</a></h3>
									<span>Web Design</span>
								</div>
							</div>
						</div>
					</div>*/}
				</div>

			</div>
		</section>


	</div>
	)
	}
}
