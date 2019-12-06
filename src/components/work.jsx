import React, { Component } from 'react'

export default class Work extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [
				{
					image: 'url(images/python.jpg)',
					link: "https://github.com/Tiki92/small_python-projects",
					name: "Small Python Projects",
					description: "Software",
					id: 1,
				},
				{
					image: 'url(images/the60s.jpg)',
					link: "https://tiki92.github.io/The-60-s/",
					name: "The 60's",
					description: "Website",
					id: 2,
				},
				{
					image: 'url(images/javascript.jpg)',
					link: "https://github.com/Tiki92/JS",
					name: "JavaScript",
					description: "Website",
					id: 3,
				},
				{
					image: 'url(images/django-logo.gif)',
					link: "https://github.com/Tiki92/EveryoneCan-Code",
					name: "Everyone-Can-Code",
					description: "Website",
					id: 4,
				},
			],
			visible: 0,
			error: false
		};

		this.loadMore = this.loadMore.bind(this);
	}

	loadMore() {
		this.setState((prev) => {
			return { visible: prev.visible + 2 };
		});
	}
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
								<div class="project" style={{ backgroundImage: 'url(images/iWish.jpg)' }}>
									<a href="https://play.google.com/store/apps/details?id=com.alupigus.iwish">
										<div class="desc">
											<div class="con">
												<h3><a href="https://play.google.com/store/apps/details?id=com.alupigus.iwish">iWish</a></h3>
												<span>Flutter Android App</span>
											</div>
										</div>
									</a>
								</div>
							</div>

							<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
								<div class="project" style={{ backgroundImage: 'url(images/django-logo.jpg)' }}>
									<a href="https://github.com/Tiki92/HitchHike">
										<div class="desc">
											<div class="con">
												<h3><a href="https://github.com/Tiki92/HitchHike">HitchHike</a></h3>
												<span>Django Web App</span>
											</div>
										</div>
									</a>
								</div>
							</div>
							<div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
								<div class="project" style={{ backgroundImage: 'url(images/budget_app.png)' }}>
									<a href="https://github.com/Tiki92/Budget-Flutter-App">
										<div class="desc">
											<div class="con">
												<h3><a href="https://github.com/Tiki92/Budget-Flutter-App">Budget App</a></h3>
												<span>Flutter Android App</span>
											</div>
										</div>
									</a>
								</div>
							</div>
							<div class="col-md-6 animate-box" data-animate-effect="fadeInTop">
								<div class="project" style={{ backgroundImage: 'url(images/blog.jpg)' }}>
									<a href="https://github.com/Tiki92/Blog">
										<div class="desc">
											<div class="con">
												<h3><a href="https://github.com/Tiki92/Blog">Blog</a></h3>
												<span>Gatsby, React</span>
											</div>
										</div>
									</a>
								</div>
							</div>

							{this.state.items.slice(0, this.state.visible).map((item, index) => {
								return (
									<div class="col-md-6" key={item.id.toString()} data-animate-effect="fadeInLeft">
										<div class="project" style={{ backgroundImage: item.image }}>
											<a href={item.link}>
												<div class="desc">
													<div class="con">
														<h3><a href={item.link} >{item.name}</a></h3>
														<span>{item.description}</span>
													</div>
												</div>
											</a>
										</div>
									</div>
								)
							})}

							<div class="row">
								<div class="col-md-12 animate-box">
									<p><button onClick={this.loadMore} class="btn btn-primary btn-lg btn-load-more">Load more <i class="icon-reload"></i></button></p>
								</div>
							</div>
							{/*
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
