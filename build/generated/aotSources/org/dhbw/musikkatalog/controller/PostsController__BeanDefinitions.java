package org.dhbw.musikkatalog.controller;

import org.dhbw.musikkatalog.repository.SongRepository;
import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.BeanInstanceSupplier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link SongController}.
 */
@Generated
public class PostsController__BeanDefinitions {
  /**
   * Get the bean instance supplier for 'postsController'.
   */
  private static BeanInstanceSupplier<SongController> getPostsControllerInstanceSupplier() {
    return BeanInstanceSupplier.<SongController>forConstructor(SongRepository.class)
            .withGenerator((registeredBean, args) -> new SongController(args.get(0)));
  }

  /**
   * Get the bean definition for 'postsController'.
   */
  public static BeanDefinition getPostsControllerBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(SongController.class);
    beanDefinition.setInstanceSupplier(getPostsControllerInstanceSupplier());
    return beanDefinition;
  }
}
