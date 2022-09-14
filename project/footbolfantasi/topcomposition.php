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

					<div class="box-getin getin-mix">
						<a href="">создать состав</a>
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

					<div class="box-type">
						<p class="style-h">составы</p>


							<p class="box-check">
								<input type="checkbox" id="f-check1" />
								<label for="f-check1">Ещё не играли</label>
							</p>
					</div>

					<div class="box-search">
						<p>Поиск состава по имени игрока:</p>

						<form id="searchform" method="get" action="">
							<input type="text" class="tftextinput">
							<input type="submit" value="найти состав" class="tfbutton">
						</form>

					</div>

				</div>

				<div class="contentbox">

						<div class="team-set-up active">
							<img src="http://<?php echo  $_SERVER["HTTP_HOST"]; ?>/images/fonfantasy/team-set-up.png" alt="">
						</div>


						<div class="box-table-team table-notplay table-hover">
							<div class="tableSostavy">
								<p>Команда молодости нашей 8 на 8</p>
							</div>
							<div class="table-item country_de">
								<div class="tabletitle">
									<span>Зарплата: <b>8,9/9,0 м</b></span>
								</div>
								<div class="tablebody">
									<p class="t-thead row">
										<span>Позиция</span>
										<span>Имя игрока</span>
										<span>Зарплата</span>
									</p>
									<p class="t-body row">
										<span>г</span>
										<span>Джанлуиджи Буффон <i>Манчестер Юнайтед</i></span>
										<span>12,3 м</span>
									</p>
									<p class="t-body row">
										<span>г</span>
										<span>Джанлуиджи Буффон <i>Манчестер Юнайтед</i></span>
										<span>12,3 м</span>
									</p>
									<p class="t-body row">
										<span>г</span>
										<span>Джанлуиджи Буффон <i>Манчестер Юнайтед</i></span>
										<span>12,3 м</span>
									</p>
									<p class="t-body row">
										<span>г</span>
										<span>Джанлуиджи Буффон <i>Манчестер Юнайтед</i></span>
										<span>12,3 м</span>
									</p>
									<p class="t-body row">
										<span>г</span>
										<span>Джанлуиджи Буффон <i>Манчестер Юнайтед</i></span>
										<span>12,3 м</span>
									</p>
									<p class="t-body row">
										<span>г</span>
										<span>Джанлуиджи Буффон <i>Манчестер Юнайтед</i></span>
										<span>12,3 м</span>
									</p>
									<p class="t-body row">
										<span>г</span>
										<span>Джанлуиджи Буффон <i>Манчестер Юнайтед</i></span>
										<span>12,3 м</span>
									</p>
									<p class="t-body row">
										<span>г</span>
										<span>Джанлуиджи Буффон <i>Манчестер Юнайтед</i></span>
										<span>12,3 м</span>
									</p>
								</div>
								<div class="a-btn table-btn">
									<a href="#" class="link-btn">изменить</a>
									<a href="#" class="link-btn">задействовать</a>
									<a href="#" class="link-btn">удалить</a>
								</div>
							</div>
						</div>

						<div class="box-table-team table-play">
							<div class="tableSostavy">
								<p>Команда молодости нашей 8 на 8</p>
							</div>
							<div class="table-item country_fr">
								<div class="tabletitle">
									<span>Состязания:<b> 2/0</b></span>
									<span>Зарплата:<b> 8,9/9,0 м</b></span>
								</div>
								<div class="tablebody">
									<p class="t-thead row">
										<span>Позиция</span>
										<span>Имя игрока</span>
										<span>Зарплата</span>
									</p>
									<p class="t-body row">
										<span>г</span>
										<span>Джанлуиджи Буффон <i>Манчестер Юнайтед</i></span>
										<span>12,3 м</span>
									</p>
									<p class="t-body row">
										<span>г</span>
										<span>Джанлуиджи Буффон <i>Манчестер Юнайтед</i></span>
										<span>12,3 м</span>
									</p>
									<p class="t-body row">
										<span>г</span>
										<span>Джанлуиджи Буффон <i>Манчестер Юнайтед</i></span>
										<span>12,3 м</span>
									</p>
									<p class="t-body row">
										<span>г</span>
										<span>Джанлуиджи Буффон <i>Манчестер Юнайтед</i></span>
										<span>12,3 м</span>
									</p>
									<p class="t-body row">
										<span>г</span>
										<span>Джанлуиджи Буффон <i>Манчестер Юнайтед</i></span>
										<span>12,3 м</span>
									</p>
									<p class="t-body row">
										<span>г</span>
										<span>Джанлуиджи Буффон <i>Манчестер Юнайтед</i></span>
										<span>12,3 м</span>
									</p>
									<p class="t-body row">
										<span>г</span>
										<span>Джанлуиджи Буффон <i>Манчестер Юнайтед</i></span>
										<span>12,3 м</span>
									</p>
									<p class="t-body row">
										<span>г</span>
										<span>Джанлуиджи Буффон <i>Манчестер Юнайтед</i></span>
										<span>12,3 м</span>
									</p>
								</div>
								<div class="a-btn table-btn">
									<a href="#" class="link-btn">задействовать</a>
									<a href="#" class="link-btn">удалить</a>
								</div>

								<div class="drop-down">
									<div class="drop-down-box">
										<p>статистика участия</p>
										<ul>
											<li>Манчестер Сити — Галатасарай <span>123,45 очков</span></li>
											<li>Манчестер Сити — Галатасарай <span>123,45 очков</span></li>
											<li>Манчестер Сити — Галатасарай <span>123,45 очков</span></li>
											<li>Манчестер Сити — Галатасарай <span>123,45 очков</span></li>
											<li>Манчестер Сити — Галатасарай <span>123,45 очков</span></li>
										</ul>
										<div class="drop-down-line2"></div>
									</div>
									<div class="drop-down-line"></div>
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
