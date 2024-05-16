package org.dhbw.musikkatalog;

import org.dhbw.dhbwtiwebeng2labspringbootlearning.DhbwTiWebEng2LabSpringBootLearningApplication$$SpringCGLIB$$0;
import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;
import org.springframework.context.annotation.ConfigurationClassUtils;

/**
 * Bean definitions for {@link DhbwTiWebEng2LabMusikkatalogApplication}.
 */
@Generated
public class DhbwTiWebEng2LabSpringBootLearningApplication__BeanDefinitions {
  /**
   * Get the bean definition for 'dhbwTiWebEng2LabSpringBootLearningApplication'.
   */
  public static BeanDefinition getDhbwTiWebEngLabSpringBootLearningApplicationBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(DhbwTiWebEng2LabMusikkatalogApplication.class);
    beanDefinition.setTargetType(DhbwTiWebEng2LabMusikkatalogApplication.class);
    ConfigurationClassUtils.initializeConfigurationClass(DhbwTiWebEng2LabMusikkatalogApplication.class);
    beanDefinition.setInstanceSupplier(DhbwTiWebEng2LabSpringBootLearningApplication$$SpringCGLIB$$0::new);
    return beanDefinition;
  }
}
