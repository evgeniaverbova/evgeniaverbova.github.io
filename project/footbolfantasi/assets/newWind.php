
<?php
	mb_internal_encoding("UTF-8");
	date_default_timezone_set('Europe/Kiev');
?>
<!doctype html>
<html lang="ru">
<?php require('headNewWind.php') ?>

<body class="newwindow-tabFilter">

	<div class="newbox-text tabFilterPopup">
		<div class="boxprof">
			<div class="boxprof-left">
				<div class="boxprof-img">
					<img src="http://<?php echo  $_SERVER["HTTP_HOST"]; ?>/images/fonfantasy/playar02.png" alt="">
				</div>
				<div class="boxprof-text">
					<p class="title">ПЗ Марио Гётце</p>
					<p class="nameClub"><img src="http://<?php echo  $_SERVER["HTTP_HOST"]; ?>/images/fonfantasy/logoclub.png" alt="">очень длинное название клуба</p>
					<p>Следующий матч: <span>vs манчестер юнайтед</span></p>
				</div>
			</div>
			<div class="boxprof-right">
				<p>Зарплата: <span>12,3 м</span></p>
				<i>добавить</i>
			</div>
		</div>

		<div class="bigtabl-tab">
			<div class="TabLinks_popup">
				<ul>
					<li class="active" data-nav="date1"><span>Статистика</span></li>
					<li data-nav="date2"><span>Новости</span></li>
				</ul>
			</div>

			<div class="ScrolTab_boxpopup">
				<div class="TabBlocks_popup" data-block="date1">

					<div class="TabTitle_popup">
						<p>В сезоне 2015-2016: <span>Г: 5  А: 6  У: 8</span>  Очков в среднем: <span>2,65</span></p>
						<span>последние матчи</span>
					</div>

					<div class="TabTitle_popupItem">
						<p>
							<span>Дата</span>
							<span>Оппонент</span>
							<span>Голы</span>
							<span>Ассист.</span>
							<span>Удары</span>
							<span>Уд. в створ</span>
							<span>мин</span>
							<span>жк</span>
							<span>кк</span>
							<span>очк.</span>
						</p>
					</div>

					<div class="Tabrow">
						<p>
							<span>08/11/15</span>
							<span>Боррусия Мюнхенгласбург</span>
							<span>0</span>
							<span>10</span>
							<span>8</span>
							<span>5</span>
							<span>234</span>
							<span>0</span>
							<span>1</span>
							<span>23.54</span>
						</p>
					</div>
					<div class="Tabrow">
						<p>
							<span>08/11/15</span>
							<span>Боррусия Мюнхенгласбург</span>
							<span>0</span>
							<span>10</span>
							<span>8</span>
							<span>5</span>
							<span>234</span>
							<span>0</span>
							<span>1</span>
							<span>23.54</span>
						</p>
					</div>
					<div class="Tabrow">
						<p>
							<span>08/11/15</span>
							<span>Боррусия Мюнхенгласбург</span>
							<span>0</span>
							<span>10</span>
							<span>8</span>
							<span>5</span>
							<span>234</span>
							<span>0</span>
							<span>1</span>
							<span>23.54</span>
						</p>
					</div>
					<div class="Tabrow">
						<p>
							<span>08/11/15</span>
							<span>Боррусия Мюнхенгласбург</span>
							<span>0</span>
							<span>10</span>
							<span>8</span>
							<span>5</span>
							<span>234</span>
							<span>0</span>
							<span>1</span>
							<span>23.54</span>
						</p>
					</div>
					<div class="Tabrow">
						<p>
							<span>08/11/15</span>
							<span>Боррусия Мюнхенгласбург</span>
							<span>0</span>
							<span>10</span>
							<span>8</span>
							<span>5</span>
							<span>234</span>
							<span>0</span>
							<span>1</span>
							<span>23.54</span>
						</p>
					</div>
				</div>

				<div class="TabBlocks_popup TabBlocks_p" data-block="date2">
					<p><span>08/09/15</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
					<p><span>08/09/15</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
				</div>
			</div>

		</div>

		<div class="link-popup">
			<a href="">Предыдущий игрок</a>
			<a href="">Следующий игрок</a>
		</div>

	</div>

</body>
</html>
