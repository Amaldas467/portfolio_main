import 'package:flutter/material.dart';

import '../statics/projects.dart';
import '../theme/responsive_screen_provider.dart';
import 'project_card.dart';

class ProjectGridView extends StatelessWidget {
  const ProjectGridView({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      padding: EdgeInsets.zero,
      gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
        maxCrossAxisExtent: 600,
        mainAxisSpacing: 10,
        crossAxisSpacing: 10,
        childAspectRatio: ResponsiveScreenProvider.isMobileScreen(context)
            ? 10 / 12
            : 10 / 11,
      ),
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      itemBuilder: (context, index) {
        var item = projectList[index];
        return ProjectCard(item: item);
      },
      itemCount: projectList.length,
    );
  }
}
