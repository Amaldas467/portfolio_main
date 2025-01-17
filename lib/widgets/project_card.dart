import 'package:carousel_slider/carousel_slider.dart';
import 'package:eva_icons_flutter/eva_icons_flutter.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../../../model/project_model.dart';
import '../statics/color_constants.dart';
import 'elevated_container.dart';
import 'project_carousel_widget.dart';

class ProjectCard extends StatelessWidget {
  const ProjectCard({
    super.key,
    required this.item,
  });
  final ProjectModel item;
  @override
  Widget build(BuildContext context) {
    return ElevatedContainer(
      padding: const EdgeInsets.all(10),
      child: Column(
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(5),
            child: CarouselSlider.builder(
              itemCount: item.images.length,
              itemBuilder: (context, index, realIndex) {
                var carouselItem = item.images[index];
                return ProjectCarouselWidget(
                  item: carouselItem,
                  isOdd: index % 2 != 0,
                );
              },
              options: CarouselOptions(
                aspectRatio: 10 / 8,
                enlargeCenterPage: false,
                viewportFraction: 1,
                autoPlay: true,
              ),
            ),
          ),
          const SizedBox(height: 10),
          FittedBox(
            fit: BoxFit.scaleDown,
            child: Text(
              item.title,
              style: Theme.of(context).textTheme.titleLarge?.copyWith(
                    color: Colors.white,
                  ),
              maxLines: 2,
            ),
          ),
          const SizedBox(height: 5),
          Expanded(
            child: FittedBox(
              fit: BoxFit.scaleDown,
              child: Wrap(
                spacing: 5,
                runSpacing: 5,
                children: item.skills
                    .map(
                      (e) => ProjectSkillsWidget(
                        text: e,
                      ),
                    )
                    .toList(),
              ),
            ),
          ),
          const SizedBox(height: 5),
//          Row(
//            mainAxisAlignment: MainAxisAlignment.center,
//            children: [
//              //Flexible(
//              //  child: FittedBox(
//              //    fit: BoxFit.scaleDown,
//              //    child: ElevatedButton(
//              //      onPressed: () {
//              //        launchUrl(Uri.parse(item.liveLink!));
//              //      },
//              //      child: const Text('VIEW DETAILS'),
//              //    ),
//              //  ),
//              //),
//
//              if (item.gitLink != null)
//                Flexible(
//                  child: FittedBox(
//                    fit: BoxFit.scaleDown,
//                    child: OutlinedButton.icon(
//                      onPressed: () {
//                        launchUrl(Uri.parse(item.gitLink!));
//                      },
//                      icon: const Icon(EvaIcons.githubOutline),
//                      label: const Text('View on GitHub'),
//                    ),
//                  ),
//                ),
//              if (item.gitLink != null && item.liveLink != null)
//                const SizedBox(width: 10),
//              if (item.liveLink != null)
//                Flexible(
//                  child: FittedBox(
//                    fit: BoxFit.scaleDown,
//                    child: OutlinedButton.icon(
//                      onPressed: () {
//                        launchUrl(Uri.parse(item.liveLink!));
//                      },
//                      icon: const Icon(EvaIcons.globe2Outline),
//                      label: const Text('View Live Demo'),
//                    ),
//                  ),
//                ),
//            ],
//          )
        ],
      ),
    );
  }
}

class ProjectSkillsWidget extends StatelessWidget {
  const ProjectSkillsWidget({
    super.key,
    required this.text,
  });
  final String text;
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(
        vertical: 5,
        horizontal: 10,
      ),
      decoration: BoxDecoration(
        color: ColorConstants.navyShadow,
        borderRadius: BorderRadius.circular(5),
      ),
      child: Text(
        text,
        style: Theme.of(context).textTheme.bodyMedium?.copyWith(
              color: ColorConstants.white60,
            ),
      ),
    );
  }
}
