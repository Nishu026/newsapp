import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country: 'in',
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,

    }
    constructor(props) {
        super(props);
        console.log("Hello I am a constructor from news component");
        this.state = {
            articles: [],
            loading: true,
            page: 1,

        }
        document.title = this.props.category;
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}`;
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({ articles: parsedData.articles })
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}`;
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({ page: this.state.page - 1, articles: parsedData.articles })
    }

    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
            this.setState({ page: this.state.page })
        } else {
            let url = `https://newsapi.org/v2/top-headlines?countr=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}`;
            let data = await fetch(url)
            let parsedData = await data.json()
            console.log(parsedData)
            this.setState({ page: this.state.page + 1, articles: parsedData.articles })
        }
    }

    render() {
        console.log("I am a render method from news component");
        return (
            <div className='container my-3'>
                <h2>Top Headlines on - {this.props.category}</h2>
                <div className="row">
                
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                    </div>
                })}
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type='button'className='btn btn-dark' onClick={this.handlePrevClick}>&larr;Previos</button>
                <button type='button'className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
            </div >
        )
    }
}

export default News