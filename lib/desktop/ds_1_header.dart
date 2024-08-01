import 'package:flutter/material.dart';

import '../statics/data_values.dart';
import '../theme/app_theme.dart';
import '../widgets/nav_bar.dart';
import '../widgets/social_profiles.dart';

class DS1Header extends StatelessWidget {
  const DS1Header({Key? key}) : super(key: key);

  List<Widget> headerData() {
    return [
      Container(
        width: 250, // 2 * radius
        height: 250, // 2 * radius
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: Colors.white, // White background color
        ),
        child: ClipOval(
          child: Image.asset(
            'assets/images/logo2.png',
            height: 600,
            width: 60,
            fit: BoxFit.contain, // Ensure the image covers the circular area
          ),
        ),
      ),
      const SizedBox(width: 60.0),
      Column(
        children: [
          SelectableText(
            DataValues.headerGreetings,
            style: AppThemeData.darkTheme.textTheme.headlineSmall,
          ),
          SelectableText(
            DataValues.headerName,
            style: AppThemeData.darkTheme.textTheme.displayMedium,
          ),
          SelectableText(
            DataValues.headerTitle,
            style: AppThemeData.darkTheme.textTheme.titleLarge,
          ),
          const SizedBox(height: 20.0),
          const SocialProfiles(),
        ],
      ),
    ];
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      color: AppThemeData.backgroundBlack,
      child: Padding(
          padding: const EdgeInsets.only(top: 60.0, bottom: 40.0),
          child: Column(
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: headerData(),
              ),
              const SizedBox(height: 60.0),
              NavBar().desktopNavBar(),
            ],
          )),
    );
  }
}
