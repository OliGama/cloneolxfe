import 
	React, 
	{ useState, 
	useEffect 
} from 'react';
import { PageArea } from './styled';
import { PageContainer } from '../../components/MainComponents';
import { useLocation, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import AdItem from '../../components/partials/AdItem';
import useApi from '../../helpers/OlxAPI';
import QueryString from 'qs';

let timer;
const Page = () => {
	const api = useApi();
	const history = useHistory();

	const useQueryString = () => {
		return new URLSearchParams(useLocation().search);
	}

	const query = useQueryString();
	
	const [q, setQ] = useState(query.get('q') != null ? query.get('q'): ''); 
	const [cat, setCat] = useState(query.get('cat') != null ? query.get('cat') : '');
	const [state, setState] = useState(query.get('state') != null ? query.get('state') : '');

	useEffect(() => {
		let QueryString = [];
		if(q) {
			QueryString.push(`q=${q}`);
		}
		if(cat) {
			QueryString.push(`cat=${cat}`);
		}
		if(state) {
			QueryString.push(`state=${state}`);
		}
		history.replace({
			search: `?${queryString.join('&')}`
		})
		if(timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(getAdsList, 1000);
		setResultOpacity(0.3);
		setCurrentPage(1);
	}, [q, cat, state]);

	const [stateList, setStateList] = useState([]);
	const [categories, setCategories] = useState([]);
	const [adList, setAdList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [resultOpacity, setResultOpacity] = useState(1);
	const [adsTotal, setAdsTotal] = useState(0);
	const [pageCount, setPageCount] = useState(0);
	const [warningMessage, setWarningMessage] = useState("Carregando...");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getState = async () => {
			const sList = await api.getState();
			setStateList(sList);
		}
		getState();
	}, []);

	useEffect(() => {
		const getCategories = async () => {
			const cats = await api.getCategories();
			setCategories(cats);
		}
		getCategories();
	}, []);

	const getAdsList = async () => {
		setLoading(true);
		let offset = 0;
		offset = (currentPage - 1) * 9;
		const Ads = await api.getAds ({
			sort: 'desc',
			limit: 9,
			q,
			cat,
			state,
			offset
		});
		setAdList(Ads.ads);
		setAdsTotal(Ads.total);
		setResultOpacity(1);
		setLoading(false);
	}

	useEffect(() => {
		if(adsTotal > 0) {
			setPageCount(Math.ceil(adsTotal / adList.length));
		} else {
			setPageCount(0)
		}
	}, [adsTotal]);

	useEffect(() => {
		setResultOpacity(0.3);
		getAdsList();
	}, [currentPage]);

	let pagination = [];
	for(let i = 0; i <= pageCount; i++){
		pagination.push(i + 1);
	}

	return (
		<PageContainer>
			<PageArea>
				<div className='leftSide'>
					<form method='GET'>
						<input 
							type='text'
							name='q'
							placeholder='O que você procura?'
							value={q}
							onChange={(e) => setQ(e.target.value)}
						/>
						<div className='filterName'>Estado:</div>
						<select
							name='state'
							value={state}
							onchange={(e) => setState(e.target.value)}
						>
							<option value=''></option>
							{stateList.map((state,index) => 
								<option key={index} value={state.id}>
									{state.name}
								</option>
							)}
						</select>
						<div className='filterName'>Categoria:</div>
						<ul>
							{categories.map((category, index) => 
								<li
									key={index}
									className={cat === category.slug ? 'categoryItem active' : 'categoryItem'}
									onClick={() => setCat(category.slug)}
								>
									<img src={category.img} alt=''/>
									<span>{category.name}</span>
								</li>
							)}
						</ul>
					</form>
				</div>
				<div className='rightSide'>
					<h2>Resultados</h2>
					{loading && adList.length === 0 &&
						<div className='ListWarning'>
							Carregando...
						</div>
					}
					{!loading && adList.length === 0 &&
						<div className='ListWarning'>
							Nenhum Resultado Encontrado
						</div>
					}
					
					<div className='list' style={{ opacity: resultOpacity }}>
						{adList.map((ad, index) => 
							<AddItem key={index} data={ad} />
						)}
					</div>
					<div className='pagination'>
						{pagination.map((pg, index) => 
							<div
								onClick={() => setCurrentPage(pg)}
								key={index}
								className={pg === currentPage ? 'pagiItem active' : 'pagItem'}
							>
								{pg}
							</div>
						)}
					</div>
				</div> 
			</PageArea>
		</PageContainer>
	)
}

export default Page;