<!doctype html>
<html lang="ru">
<?php require('./assets/head.php') ?>





	<div class="container-fantasy-fully">
		<div class="container-fantasy">

			<div class="fantasy-left">

				<div class="boxheader">
					<img src="http://<?php echo  $_SERVER["HTTP_HOST"]; ?>/images/fonfantasy/logo-fantasy.png" alt="">
					<div class="boxmenu">
						<ul>
							<li><a class="active" href="#"><span>Лобби</span></a></li>
							<li><a href="#"><span>Мои составЫ</span></a></li>
							<li><a href="#"><span>Мои состязания</span></a></li>
							<li><a href="#"><span>начисление очков</span></a></li>
						</ul>
					</div>
				</div>

				<div class="sidebarleft">
					<div class="box-quickly">
						<p class="style-h">Ближайшее состязание через:</p>

						<ul class="countdown">
							<li><span class="hours">0</span></li>
							<li><span class="minutes">0</span></li>
							<li><span class="seconds">0</span></li>
						</ul>
					</div>

					<div class="box-type">
						<p class="style-h">тип игры:</p>

						<div class="radio-type-box">
							<div>
								<input id="radio8" type="radio" name="radios">
								<label for="radio8" class="f-radio">8x8</label>
							</div>
							<div>
								<input id="radio11" type="radio" name="radios">
								<label for="radio11" class="f-radio">11x11</label>
							</div>
						</div>
					</div>

					<div class="box-cost">
						<p class="style-h">стоимость участия</p>

						<div class="box-select">
							<select class="moneySelect" name="ot"  placeholder="От">
								<option></option>
								<option value="10">10 руб</option>
								<option value="20">20 руб</option>
							</select>

							<select class="moneySelect2" name="ot"  placeholder="До">
								<option></option>
								<option value="10">10 руб</option>
								<option value="20">20 руб</option>
							</select>
						</div>
					</div>

					<div class="box-rush">
						<p class="style-h">тип <br> состязания</p>
						<i class="icon-info">
							<div class="box-info">
								<span>
									<p>Для новичков</p>
									Для тех, у кого нет совершенно никак- ого, хотя бы малейшего опыта в предлагаемых играх. Если вы никогда даже не бывали на данном сайте, или подобных ему, то вам, вне всяких сомнений, стоит выбрать именно эту категорию.
								</span>

								<span>
									<p>Для новичков</p>
									Для тех, у кого нет совершенно никак- ого, хотя бы малейшего опыта в предлагаемых играх. Если вы никогда даже не бывали на данном сайте, или подобных ему, то вам, вне всяких сомнений, стоит выбрать именно эту категорию.
								</span>
							</div>
						</i>

						<div class="box-check">
							<p>
								<input type="checkbox" id="f-check1" />
								<label for="f-check1">Все</label>
							</p>
							<p>
								<input type="checkbox" id="f-check2" />
								<label for="f-check2">Избранные</label>
							</p>
							<p>
								<input type="checkbox" id="f-check3" />
								<label for="f-check3">Для новичков</label>
							</p>
							<p>
								<input type="checkbox" id="f-check4" />
								<label for="f-check4">Один на один</label>
							</p>
							<p>
								<input type="checkbox" id="f-check5" />
								<label for="f-check5">50 на 50</label>
							</p>
							<p>
								<input type="checkbox" id="f-check6" />
								<label for="f-check6">Бесплатные</label>
							</p>
						</div>

					</div>
				</div>

				<div class="contentbox">
					<div class="how-play">
						<input id="howtoplay" type="checkbox">
						<label for="howtoplay">Как играть?</label>
						<div class="box-how-play">
							<ol>
								<li>
									<span class="li-icon-purse"></span>
									<p>Заплатить вступительный взнос и выбрать состязание</p>
								</li>
								<li>
									<span class="li-icon-command"></span>
									<p>Набрать <br> команду</p>
								</li>
								<li>
									<span class="li-icon-statistics"></span>
									<p>Набрать очки по определённой статистике</p>
								</li>
								<li>
									<span class="li-icon-leader"></span>
									<p>Игрок с наибольшим количеством <br> очков побеждает</p>
								</li>
							</ol>
							<a href="#">Подробнее</a>
						</div>
					</div>

					<div class="boxtable-sorter">

						<div class="myTable-nav">
							<ul>
								<li class="all active">все лиги</li>
								<li class="country_uk" data-nav="country_uk"></li>
								<li class="country_es" data-nav="country_es"></li>
								<li class="country_ua" data-nav="country_ua"></li>
								<li class="country_de" data-nav="country_de"></li>
								<li class="country_eu" data-nav="country_eu"></li>
								<li class="country_ru" data-nav="country_ru"></li>
								<li class="country_fr" data-nav="country_fr"></li>
								<li class="country_it" data-nav="country_it"></li>
							</ul>
						</div>

						<div class="box-myTablesorter" id="tablefilter">

							<div id="myTable-sorter">
								<p data-type="competition">Состязание<span></span></p>
								<p data-type="price">Стоимость<span></span></p>
								<p data-type="prize">призовые<span></span></p>
								<p data-type="participants">Участники<span></span></p>
								<p data-type="start">начало<span></span></p>
							</div>

							<div id="myTable-item">
								<div class="Scrol2">
									<div class="box_sortjs">
										<p class='country_ua' data-block="country_ua">
											<a href="#">
												<span>Чемпионат Германии 07/11/185 4 матча</span>
												<span>1222 р</span>
												<span>56578 р</span>
												<span>8/50</span>
												<span>15:30:11</span>
											</a>
										</p>
										<p class='country_uk' data-block="country_uk">
											<a href="#">
												<span>яемпионат Германии 07/11/15 4 матча</span>
												<span>124 р</span>
												<span>578 р</span>
												<span>8/10</span>
												<span>10:20:11</span>
											</a>
										</p>
										<p class='country_es' data-block="country_es">
											<a href="#">
												<span>пемпионат Германии 07/11/15 4 матча</span>
												<span>1234 р</span>
												<span>5678 р</span>
												<span>8/20</span>
												<span>12:20:00</span>
											</a>
										</p>
										<p class='country_ua' data-block="country_ua">
											<a href="#">
												<span>Чемпионат Германии 07/11/15 4 матча</span>
												<span>1234 р</span>
												<span>58 р</span>
												<span>9/20</span>
												<span>12:20:00</span>
											</a>
										</p>
										<p class='country_de' data-block="country_de">
											<a href="#">
												<span>Чемпионат Германии 07/11/15 4 матча</span>
												<span>1234 р</span>
												<span>5678 р</span>
												<span>8/20</span>
												<span>12:20:00</span>
											</a>
										</p>
										<p class='country_eu' data-block="country_eu">
											<a href="#">
												<span>Чемпионат Германии 07/11/15 4 матча</span>
												<span>1234 р</span>
												<span>5678 р</span>
												<span>8/20</span>
												<span>12:20:00</span>
											</a>
										</p>
										<p class='country_ru' data-block="country_ru">
											<a href="#">
												<span>Чемпионат Германии 07/11/15 4 матча</span>
												<span>1234 р</span>
												<span>5678 р</span>
												<span>8/20</span>
												<span>12:20:00</span>
											</a>
										</p>
										<p class='country_fr' data-block="country_fr">
											<a href="#">
												<span>Чемпионат Германии 07/11/15 4 матча</span>
												<span>1234 р</span>
												<span>5678 р</span>
												<span>8/20</span>
												<span>12:20:00</span>
											</a>
										</p>
										<p class='country_it' data-block="country_it">
											<a href="#">
												<span>Чемпионат Германии 07/11/15 4 матча</span>
												<span>1234 р</span>
												<span>5678 р</span>
												<span>8/20</span>
												<span>12:20:00</span>
											</a>
										</p>
										<p class='country_uk' data-block="country_uk">
											<a href="#">
												<span>Чемпионат Германии 07/11/15 4 матча</span>
												<span>1234 р</span>
												<span>5678 р</span>
												<span>8/20</span>
												<span>12:20:00</span>
											</a>
										</p>
										<p class='country_uk' data-block="country_uk">
											<a href="#">
												<span>Чемпионат Германии 07/11/15 4 матча</span>
												<span>1234 р</span>
												<span>5678 р</span>
												<span>8/20</span>
												<span>12:20:00</span>
											</a>
										</p>
										<p class='country_es' data-block="country_es">
											<a href="#">
												<span>Чемпионат Германии 07/11/15 4 матча</span>
												<span>1234 р</span>
												<span>5678 р</span>
												<span>8/20</span>
												<span>12:20:00</span>
											</a>
										</p>
										<p class='country_ua' data-block="country_ua">
											<a href="#">
												<span>Чемпионат Германии 07/11/15 4 матча</span>
												<span>1234 р</span>
												<span>5678 р</span>
												<span>8/20</span>
												<span>12:20:00</span>
											</a>
										</p>
										<p class='country_de' data-block="country_de">
											<a href="#">
												<span>Чемпионат Германии 07/11/15 4 матча</span>
												<span>1234 р</span>
												<span>5678 р</span>
												<span>8/20</span>
												<span>12:20:00</span>
											</a>
										</p>
										<p class='country_eu' data-block="country_eu">
											<a href="#">
												<span>Чемпионат Германии 07/11/15 4 матча</span>
												<span>1234 р</span>
												<span>5678 р</span>
												<span>8/20</span>
												<span>12:20:00</span>
											</a>
										</p>
										<p class='country_ru' data-block="country_ru">
											<a href="#">
												<span>Чемпионат Германии 07/11/15 4 матча</span>
												<span>1234 р</span>
												<span>5678 р</span>
												<span>8/20</span>
												<span>12:20:00</span>
											</a>
										</p>
										<p class='country_fr' data-block="country_fr">
											<a href="#">
												<span>Чемпионат Германии 07/11/15 4 матча</span>
												<span>1234 р</span>
												<span>5678 р</span>
												<span>8/20</span>
												<span>12:20:00</span>
											</a>
										</p>
										<p class='country_it' data-block="country_it">
											<a href="#">
												<span>Чемпионат Германии 07/11/15 4 матча</span>
												<span>1234 р</span>
												<span>5678 р</span>
												<span>8/20</span>
												<span>12:20:00</span>
											</a>
										</p>
										<p class='country_uk' data-block="country_uk">
											<a href="#">
												<span>Чемпионат Германии 07/11/15 4 матча</span>
												<span>1234 р</span>
												<span>5678 р</span>
												<span>8/20</span>
												<span>12:20:00</span>
											</a>
										</p>
										<p class='country_fr' data-block="country_fr">
											<a href="#">
												<span>Чемпионат Германии 07/11/15 4 матча</span>
												<span>1234 р</span>
												<span>5678 р</span>
												<span>8/20</span>
												<span>12:20:00</span>
											</a>
										</p>
										<p class='country_fr' data-block="country_fr">
											<a href="#">
												<span>Чемпионат Германии 07/11/15 4 матча</span>
												<span>12534 р</span>
												<span>5678 р</span>
												<span>8/20</span>
												<span>12:20:00</span>
											</a>
										</p>
										<p class='country_fr' data-block="country_fr">
											<a href="#">
												<span>Чемпионат Германии 07/11/15 4 матча</span>
												<span>19934 р</span>
												<span>5678 р</span>
												<span>8/20</span>
												<span>12:20:00</span>
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>


			</div>

			<div class="fantasy-right">
				<div class="fantasy-right-banner banner-league">
					<div class="right-banner-box">
						<p>Лига чемпионов</p>
						<span>8 матчей</span>
						<span class="f-data">08.11.2015</span>
					</div>
				</div>

				<div class="fantasy-right-banner banner-forward">
					<div class="right-banner-box">
						<p>Топ 5 <br> форвардов</p>
						<!-- table -->
						<div class="table">
							<table>
								<tbody>
									<tr>
										<td>Серхио Агуэро</td>
										<td><span>98,76</span></td>
									</tr>
									<tr>
										<td>Марио Балотелли</td>
										<td><span>98,76</span></td>
									</tr>
									<tr>
										<td>Эдинсон Кавани</td>
										<td><span>98,76</span></td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<td>Диего Коста</td>
										<td><span>98,76</span></td>
									</tr>
									<tr>
										<td>Криштиану Роналду</td>
										<td><span>98,76</span></td>
									</tr>
								</tfoot>
							</table>
						</div>
						<!-- end table -->
					</div>
				</div>

				<div class="fantasy-right-banner banner-halfback">
					<div class="right-banner-box">
						<p>Топ 5 <br> полузащитников</p>
						<!-- table -->
						<div class="table">
							<table>
								<tbody>
									<tr>
										<td>Серхио Агуэро</td>
										<td><span>98,76</span></td>
									</tr>
									<tr>
										<td>Марио Балотелли</td>
										<td><span>98,76</span></td>
									</tr>
									<tr>
										<td>Эдинсон Кавани</td>
										<td><span>98,76</span></td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<td>Диего Коста</td>
										<td><span>98,76</span></td>
									</tr>
									<tr>
										<td>Криштиану Роналду</td>
										<td><span>98,76</span></td>
									</tr>
								</tfoot>
							</table>
						</div>
						<!-- end table -->
					</div>
				</div>

				<div class="fantasy-right-banner banner-defender">
					<div class="right-banner-box">
						<p>Топ 5 <br> защитников</p>
						<!-- table -->
						<div class="table">
							<table>
								<tbody>
									<tr>
										<td>Серхио Агуэро</td>
										<td><span>98,76</span></td>
									</tr>
									<tr>
										<td>Марио Балотелли</td>
										<td><span>98,76</span></td>
									</tr>
									<tr>
										<td>Эдинсон Кавани</td>
										<td><span>98,76</span></td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<td>Диего Коста</td>
										<td><span>98,76</span></td>
									</tr>
									<tr>
										<td>Криштиану Роналду</td>
										<td><span>98,76</span></td>
									</tr>
								</tfoot>
							</table>
						</div>
						<!-- end table -->
					</div>
				</div>

				<div class="fantasy-right-banner banner-goalkeeper">
					<div class="right-banner-box">
						<p>Топ 5 <br> вратарей</p>
						<!-- table -->
						<div class="table">
							<table>
								<tbody>
									<tr>
										<td>Серхио Агуэро</td>
										<td><span>98,76</span></td>
									</tr>
									<tr>
										<td>Марио Балотелли</td>
										<td><span>98,76</span></td>
									</tr>
									<tr>
										<td>Эдинсон Кавани</td>
										<td><span>98,76</span></td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<td>Диего Коста</td>
										<td><span>98,76</span></td>
									</tr>
									<tr>
										<td>Криштиану Роналду</td>
										<td><span>98,76</span></td>
									</tr>
								</tfoot>
							</table>
						</div>
						<!-- end table -->
					</div>
				</div>
			</div>

		</div>
	</div>

</body>
</html>
